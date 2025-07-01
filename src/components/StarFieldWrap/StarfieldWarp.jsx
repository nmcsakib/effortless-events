import { useRef, useEffect, useState } from "react";

const StarfieldWarp = ({ children }) => {
  const wrapperRef = useRef(null);
  const canvasRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const starsRef = useRef([]);
  const animationRef = useRef(null);
  const warpSpeed = 0.5;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const handleResize = () => {
      if (!wrapperRef.current) return;

      const rect = wrapperRef.current.getBoundingClientRect();
      const { width, height } = rect;
      const devicePixelRatio = window.devicePixelRatio || 1;

      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(devicePixelRatio, devicePixelRatio);

      setDimensions({ width, height });

      initStars(width, height);
    };

    const initStars = (width, height) => {
      const starCount = width < 768 ? 300 : 500;
      const stars = [];

      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          z: Math.random() * 1000,
          size: Math.random() * 2 + 1,
          color: `hsl(${Math.random() * 60 + 200}, 100%, ${Math.random() * 30 + 70}%)`,
        });
      }

      starsRef.current = stars;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!dimensions.width || !dimensions.height) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const animate = () => {
      ctx.fillStyle = "rgba(10, 10, 20, 0.2)";
      ctx.fillRect(0, 0, dimensions.width, dimensions.height);

      const stars = starsRef.current;
      const centerX = dimensions.width / 2;
      const centerY = dimensions.height / 2;

      for (const star of stars) {
        star.z -= warpSpeed;

        if (star.z <= 0 || star.z > 1000) {
          star.x = Math.random() * dimensions.width - centerX;
          star.y = Math.random() * dimensions.height - centerY;
          star.z = 1000;
          star.size = Math.random() * 2 + 1;
        }

        const projectedX = (star.x / star.z) * 500 + centerX;
        const projectedY = (star.y / star.z) * 500 + centerY;
        const projectedSize = star.size * (1 - star.z / 1000);

        if (
          projectedX < -10 ||
          projectedX > dimensions.width + 10 ||
          projectedY < -10 ||
          projectedY > dimensions.height + 10
        )
          continue;

        if (warpSpeed > 0.8 && star.z < 500) {
          const prevX = (star.x / (star.z + warpSpeed * 2)) * 500 + centerX;
          const prevY = (star.y / (star.z + warpSpeed * 2)) * 500 + centerY;

          ctx.beginPath();
          ctx.moveTo(projectedX, projectedY);
          ctx.lineTo(prevX, prevY);
          ctx.strokeStyle = star.color;
          ctx.lineWidth = projectedSize;
          ctx.stroke();
        } else {
          ctx.beginPath();
          ctx.arc(projectedX, projectedY, projectedSize, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.fill();
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [dimensions]);

  return (
    <div
      ref={wrapperRef}
      className="relative w-full min-h-screen flex items-center flex-col overflow-hidden rounded-high bg-gray-900"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
      {children}
    </div>
  );
};

export default StarfieldWarp;

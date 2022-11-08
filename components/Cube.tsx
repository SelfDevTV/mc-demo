import { useBox } from "@react-three/cannon";

const generateRandomColor = () => {
  const color1 = Math.round(Math.random() * 250);
  const color2 = Math.round(Math.random() * 250);
  const color3 = Math.round(Math.random() * 250);
  return `rgb(${color1}, ${color2}, ${color3})`;
};

interface CubeProps {
  x: number;
  y: number;
  z: number;
}

export const Cube = ({ x, y, z }: CubeProps) => {
  const [ref] = useBox(() => ({
    mass: 0,
    position: [x, y, z],
    type: "Kinematic",
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial color={generateRandomColor()} />
    </mesh>
  );
};

import { useSphere } from "@react-three/cannon";

export const Player = () => {
  const [playerRef] = useSphere(() => ({
    mass: 1,
    position: [0, 5, 0],
    type: "Dynamic",
    angularDamping: 1,
  }));

  return (
    <mesh ref={playerRef}>
      <boxGeometry />
      <meshBasicMaterial />
    </mesh>
  );
};

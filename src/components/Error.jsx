export default function Error({ error }) {
  const { title, message, resolution } = error;
  return (
    <div className="flex space-y-4 mt-10  flex-col items-center text-center">
      <p className="text-5xl">🙁</p>
      <p className="font-bold">{title}</p>
      <p className="text-center text-5">{message + " " + resolution}</p>
    </div>
  );
}

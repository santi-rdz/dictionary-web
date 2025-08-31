export default function Loading() {
  return (
    <div className="flex justify-center mt-10 gap-4">
      {Array.from({ length: 3 }, (_, i) => (
        <Dot key={i} index={i} />
      ))}
    </div>
  );
}

function Dot({ index }) {
  return (
    <span
      style={{ animationDelay: `${index * 200}ms` }}
      className="size-5 bg-9 rounded-full inline-block animate-bounce"
    ></span>
  );
}

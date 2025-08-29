export default function TailwindTest() {
  return (
    <div className="p-8 bg-red-500 text-white text-center">
      <h1 className="text-4xl font-bold mb-4">Tailwind Test</h1>
      <p className="text-lg">If you see this styled with red background and white text, Tailwind is working!</p>
      <button className="mt-4 bg-black px-6 py-2 hover:bg-gray-800 transition">
        Test Button
      </button>
    </div>
  );
}

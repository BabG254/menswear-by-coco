export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-bold text-xl text-red-600">Menswear by Coco</span>
          <p className="mt-2 text-sm text-gray-400">© {new Date().getFullYear()} Menswear by Coco. All rights reserved.</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          <a href="https://instagram.com/yourstore" target="_blank" rel="noopener" className="hover:text-red-600">Instagram</a>
          <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener" className="hover:text-red-600">WhatsApp</a>
          <a href="/contact" className="hover:text-red-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}

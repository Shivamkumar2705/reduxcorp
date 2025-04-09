// src/components/Header.js
function Header() {
    return (
      <section className="text-center py-20 px-4 bg-white">
        <p className="text-sm tracking-widest text-gray-600 uppercase mb-4">
          Reduxcorporation
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4">
          A CREATIVE AGENCY <br />
          WITH <span className="text-purple-500">A TWIST</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-6">
          We didn't just design. We went beyond to <strong>INVENT</strong> something truly innovative.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-all">
          GET STARTED →
        </button>
      </section>
    );
  }
  
  export default Header;
  
export default function WeddingCongratsPage() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1M4DpDlE9FCJZNp8eJIRBkHndDmF9ajZX";
    link.download = "Afif-Indah-Wedding.jpg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const wishes = [
    {
      name: "Sahabat",
      message:
        "Selamat menempuh perjalanan suci bersama. Semoga cinta yang dipersatukan hari ini tumbuh semakin indah dalam setiap langkah kehidupan.",
    },
    {
      name: "Keluarga",
      message:
        "Semoga rumah tangga yang dibangun menjadi tempat pulang yang penuh ketenangan, cinta, dan keberkahan.",
    },
    {
      name: "Teman Dekat",
      message:
        "Hari ini menjadi awal kisah terindah kalian. Semoga kebahagiaan selalu menyertai dalam setiap musim kehidupan.",
    },
  ];

  const photos = [
    "https://drive.google.com/uc?export=view&id=1ABp05F68LvRJEHeVUQ-NNTqSthxpwo4b",
    "https://drive.google.com/uc?export=view&id=KzrEjMyIcCgi9TzRhvrMWM7kNPihDQ9_",
    "https://drive.google.com/uc?export=view&id=1n1HSdkYUfzZJOo_93EepSk01x20kLdhz",
    "https://drive.google.com/uc?export=view&id=1ExaYutH3U4m0aYsrgqKJ6CWJc-LbsKKB",
    "https://drive.google.com/uc?export=view&id=16hvtM4NwYyPzmdmreJgLIExtL_dG2eBA",
    "https://drive.google.com/uc?export=view&id=1MOC3T3lmDSveB3aF4r2-5UBozW-CVIsB",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3b0d17] via-[#5c1323] to-[#1f060c] text-white">
      <section className="relative overflow-hidden py-32 px-6 text-center min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://drive.google.com/uc?export=view&id=1M4DpDlE9FCJZNp8eJIRBkHndDmF9ajZX')",
          }}
        />

        <div className="absolute inset-0 bg-[#2a0710]/70 backdrop-blur-[2px]" />

        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-2xl md:text-3xl text-[#f5d7dc] mb-6 italic tracking-[0.3em] uppercase">
            Wedding Celebration
          </p>

          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-10 tracking-wide text-[#f8d7da] drop-shadow-2xl">
            Afif & Indah
          </h1>

          <div className="bg-white/10 backdrop-blur-xl rounded-[2rem] shadow-2xl p-10 max-w-3xl mx-auto border border-white/20">
            <p className="text-xl leading-relaxed text-[#f8e7ea] font-light tracking-wide mb-8">
              “Dua hati dipersatukan dalam satu janji suci. Semoga cinta yang terukir hari ini menjadi kisah indah sepanjang masa.”
            </p>

            <button
              onClick={handleDownload}
              className="px-8 py-4 bg-[#7a1d33] hover:bg-[#962645] transition duration-300 rounded-full text-white font-semibold tracking-[0.2em] uppercase shadow-2xl border border-white/20"
            >
              Download Invitation
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <h2 className="text-4xl font-serif font-bold text-center mb-12 text-[#f5d7dc] tracking-wide">
          Momen Bahagia
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[2rem] shadow-2xl border border-white/10 hover:scale-105 transition-transform duration-500"
            >
              <img
                src={photo}
                alt={`Wedding ${index + 1}`}
                className="w-full h-[320px] object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white/5 backdrop-blur-md py-20 px-6 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-rose-600">
            Ucapan & Doa
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {wishes.map((wish, index) => (
              <div
                key={index}
                className="bg-white/10 rounded-[2rem] shadow-xl p-8 border border-white/10 hover:bg-white/15 transition duration-300"
              >
                <div className="text-4xl mb-4">💖</div>
                <p className="text-[#f8e7ea] leading-relaxed mb-5 font-light tracking-wide">
                  {wish.message}
                </p>
                <p className="font-semibold text-[#f3c8cf] tracking-wide">— {wish.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="text-center py-12 px-6">
        <div className="max-w-3xl mx-auto bg-white/10 text-white rounded-[2rem] p-10 shadow-2xl border border-white/10 backdrop-blur-xl">
          <h3 className="text-4xl font-serif font-bold mb-6 text-[#f8d7da]">
            Happy Wedding Day ✨
          </h3>
          <p className="text-xl leading-relaxed text-[#f8e7ea] font-light tracking-wide">
            Semoga cinta, kebahagiaan, dan keberkahan selalu menyertai rumah
            tangga kalian.
          </p>
        </div>
      </footer>
    </div>
  );
}

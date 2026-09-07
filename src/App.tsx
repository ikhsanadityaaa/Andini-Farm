import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Layout } from "./components/chrome";
import Home from "./pages/Home";
import BreedPage from "./pages/Breed";
import NeedPage from "./pages/Needs";
import JualSapi from "./pages/JualSapi";
import { KontakPage, PengirimanPage, TentangPage } from "./pages/Extras";
import { ArticleDetailPage, ArticlesPage } from "./pages/Articles";
import { WAButton } from "./components/ui";

function NotFound() {
  return (
    <section className="max-w-3xl mx-auto px-5 py-28 text-center bg-cream bg-rules">
      <p className="font-mono text-[11px] font-bold tracking-[0.3em] uppercase text-leather">
        Halaman tidak ditemukan
      </p>
      <h1 className="mt-4 font-display text-5xl uppercase text-ranch">404, SAPI NYASAR</h1>
      <p className="mt-5 text-ink/70 max-w-md mx-auto leading-relaxed">
        Halaman yang Anda cari tidak ada. Yuk kembali ke kandang dan lihat sapi yang
        tersedia.
      </p>
      <div className="mt-9 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="border-2 border-ink bg-ranch text-cream px-6 py-[15px] text-[11px] font-extrabold uppercase tracking-[0.13em] shadow-press hover:-translate-x-[2px] hover:-translate-y-[2px] hover:shadow-[6px_6px_0_0_#151515] transition-all"
        >
          KE BERANDA
        </Link>
        <WAButton wa="Halo Andini Farm, saya ingin tanya sapi yang tersedia." variant="gold">
          CHAT WHATSAPP
        </WAButton>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jual-sapi" element={<JualSapi />} />
          <Route path="/sapi-limosin" element={<BreedPage slug="limosin" />} />
          <Route path="/sapi-simental" element={<BreedPage slug="simental" />} />
          <Route path="/sapi-pegon" element={<BreedPage slug="pegon" />} />
          <Route path="/sapi-qurban" element={<NeedPage slug="qurban" />} />
          <Route path="/sapi-aqiqah" element={<NeedPage slug="aqiqah" />} />
          <Route path="/sapi-penggemukan" element={<NeedPage slug="penggemukan" />} />
          <Route path="/pengiriman-sapi" element={<PengirimanPage />} />
          <Route path="/tentang-andini-farm" element={<TentangPage />} />
          <Route path="/artikel" element={<ArticlesPage />} />
          <Route path="/artikel/:slug" element={<ArticleDetailPage />} />
          <Route path="/kontak" element={<KontakPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

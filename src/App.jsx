import { useState } from 'react';
import './App.css';

function App() {
  const fotoProfil = 'https://i.ibb.co.com/JwYtwvk5/ca1a1f28-6a4d-465b-b671-3e4b79d57421-1.jpg"';
  // =====================
  // 1. VARIABEL DATA DIRI
  // =====================
  const nama = 'Wafiq Salma Aulia';
  const pekerjaan = 'Admin';
  const tanggalLahir = '26 Juni 2005';
  const tanggalLahirObj = new Date(2005, 5, 26); // Juni = bulan ke-5 (0-indexed)

  // =====================
  // 2. DATA FILM FAVORIT
  // =====================
  const filmFavorit = [
    {
      id: 1,
      judul: 'Taxi Driver',
      genre: 'Crime · Drama',
      tahun: '1976',
      emoji: '🚕',
      warna: '#1a1a2e',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnqj7P7mJXTnNjvHst3Vrf7NjzapzMX2ZpLg&s',
    },
    {
      id: 2,
      judul: 'Home School',
      genre: 'Drama',
      tahun: '2019',
      emoji: '📚',
      warna: '#2d1b69',
      poster:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmuulvgRlQ5GR_mh2naIsAiDeZEwZ9WxMXug&s',
    },
    {
      id: 3,
      judul: 'Alive',
      genre: 'Horror · Thriller',
      tahun: '2020',
      emoji: '🧟',
      warna: '#3d0000',
      poster:
        'https://upload.wikimedia.org/wikipedia/id/thumb/f/f1/Alive_2020.jpg/250px-Alive_2020.jpg',
    },
    {
      id: 4,
      judul: 'All of Us Are Dead',
      genre: 'Horror · Series',
      tahun: '2022',
      emoji: '🧠',
      warna: '#1a0000',
      poster:
        'https://upload.wikimedia.org/wikipedia/id/2/24/All_of_Us_Are_Dead.jpeg',
    },
    {
      id: 5,
      judul: 'Forgotten',
      genre: 'Thriller · Mystery',
      tahun: '2017',
      emoji: '👁️',
      warna: '#0a192f',
      poster:
        'https://m.media-amazon.com/images/M/MV5BYWU5YzhiNTEtMDg5ZC00ZWRiLTkyNmItYzRkNGNmMzY5NmRmXkEyXkFqcGc@._V1_.jpg',
    },
  ];

  // =====================
  // 2. FUNCTION ZODIAC
  // =====================
  const [zodiacInfo, setZodiacInfo] = useState(null);

  const getZodiac = (tanggal) => {
    const bulan = tanggal.getMonth() + 1;
    const hari = tanggal.getDate();

    if ((bulan === 3 && hari >= 21) || (bulan === 4 && hari <= 19))
      return {
        nama: 'Aries',
        simbol: '♈',
        deskripsi: 'Berani, energetik, dan penuh semangat. Pemimpin alami!',
      };
    if ((bulan === 4 && hari >= 20) || (bulan === 5 && hari <= 20))
      return {
        nama: 'Taurus',
        simbol: '♉',
        deskripsi: 'Tekun, loyal, dan menyukai hal-hal indah dalam hidup.',
      };
    if ((bulan === 5 && hari >= 21) || (bulan === 6 && hari <= 20))
      return {
        nama: 'Gemini',
        simbol: '♊',
        deskripsi: 'Cerdas, komunikatif, dan penuh rasa ingin tahu.',
      };
    if ((bulan === 6 && hari >= 21) || (bulan === 7 && hari <= 22))
      return {
        nama: 'Cancer',
        simbol: '♋',
        deskripsi:
          'Penuh empati, intuitif, dan sangat setia terhadap orang tercinta.',
      };
    if ((bulan === 7 && hari >= 23) || (bulan === 8 && hari <= 22))
      return {
        nama: 'Leo',
        simbol: '♌',
        deskripsi: 'Percaya diri, kreatif, dan selalu tampil memukau.',
      };
    if ((bulan === 8 && hari >= 23) || (bulan === 9 && hari <= 22))
      return {
        nama: 'Virgo',
        simbol: '♍',
        deskripsi:
          'Analitis, perfeksionis, dan sangat perhatian terhadap detail.',
      };
    if ((bulan === 9 && hari >= 23) || (bulan === 10 && hari <= 22))
      return {
        nama: 'Libra',
        simbol: '♎',
        deskripsi: 'Suka harmoni, adil, dan pandai bergaul.',
      };
    if ((bulan === 10 && hari >= 23) || (bulan === 11 && hari <= 21))
      return {
        nama: 'Scorpio',
        simbol: '♏',
        deskripsi: 'Intens, misterius, dan punya intuisi yang sangat kuat.',
      };
    if ((bulan === 11 && hari >= 22) || (bulan === 12 && hari <= 21))
      return {
        nama: 'Sagittarius',
        simbol: '♐',
        deskripsi: 'Optimis, bebas, dan selalu haus akan petualangan.',
      };
    if ((bulan === 12 && hari >= 22) || (bulan === 1 && hari <= 19))
      return {
        nama: 'Capricorn',
        simbol: '♑',
        deskripsi: 'Ambisius, disiplin, dan pekerja keras.',
      };
    if ((bulan === 1 && hari >= 20) || (bulan === 2 && hari <= 18))
      return {
        nama: 'Aquarius',
        simbol: '♒',
        deskripsi: 'Inovatif, independen, dan visioner.',
      };
    return {
      nama: 'Pisces',
      simbol: '♓',
      deskripsi: 'Kreatif, empatik, dan penuh imajinasi.',
    };
  };

  const handleCekZodiac = () => {
    const zodiac = getZodiac(tanggalLahirObj);
    setZodiacInfo(zodiac);
    alert(
      `${zodiac.simbol} Zodiak Kamu: ${zodiac.nama}\n\n${zodiac.deskripsi}`
    );
  };

  return (
    <div className="app">
      {/* HEADER */}
      <header className="header">
        <h1> My Profile</h1>
        <p>Tugas React Vite — TIF K-23B · Universitas Teknologi Bandung</p>
      </header>

      {/* HERO - PROFIL */}
      <section className="hero">
        <div className="avatar">
          <img src={fotoProfil} alt="Foto Profil" />
        </div>
        <div className="profile-card">
          <h2>{nama}</h2>
          <div className="info-row">
            <span className="info-label">Nama Lengkap</span>
            <span className="info-value">{nama}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Pekerjaan</span>
            <span className="info-value">{pekerjaan}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Tanggal Lahir</span>
            <span className="info-value">{tanggalLahir}</span>
          </div>
          <div className="info-row">
            <span className="info-label">Kampus</span>
            <span className="info-value">UTB Bandung</span>
          </div>
          <div className="info-row">
            <span className="info-label">Prodi</span>
            <span className="info-value">Teknik Informatika</span>
          </div>

          {/* BUTTON ZODIAC */}
          <button className="zodiac-btn" onClick={handleCekZodiac}>
            🔮 Cek Zodiac Saya
          </button>

          {/* HASIL ZODIAC */}
          {zodiacInfo && (
            <div className="zodiac-result">
              <span className="zodiac-symbol">{zodiacInfo.simbol}</span>
              <strong>{zodiacInfo.nama}</strong>
              <p>{zodiacInfo.deskripsi}</p>
            </div>
          )}
        </div>
      </section>

      {/* FILM FAVORIT */}
      <section className="section">
        <div className="section-title">🎬 Film Favorit</div>
        <div className="movies-grid">
          {filmFavorit.map((film) => (
            <div key={film.id} className="movie-card">
              <div className="movie-poster" style={{ background: film.warna }}>
                <img
                  src={film.poster}
                  alt={film.judul}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentNode.innerHTML = `<span style="font-size:2.5rem">${film.emoji}</span>`;
                  }}
                />
              </div>
              <div className="movie-info">
                <div className="movie-title">{film.judul}</div>
                <div className="movie-genre">{film.genre}</div>
                <div className="movie-year">{film.tahun}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>Made with ⚛️ React + Vite</p>
        <p>
          {nama} · TIF K-23B · {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}

export default App;

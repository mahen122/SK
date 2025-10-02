// React itu bungkus HTML ke dalam javacript 
// // 1 file jsx itu punya 1 fuction utama 
// // 1 fuction utama ditanyakan dengan default 
// // 1 fuction harus return 1 tag, tidak boleh lebih


function Home() {
    //return (
      //<div>
      //  <Judul />
        //<Isi />
      //</div>
   // );
   return <h1 class="text-3x1 font-bold underline"> 
   Hello 
</h1>
  }
  
  function Judul() {
    return <h1>Berita Heboh</h1>;
  }
  
  function Isi() {
    return <p>Semarang, hari ini telah lahir banyak programer frontend dari kelas D21</p>;
  }
  
  export default Home;
  
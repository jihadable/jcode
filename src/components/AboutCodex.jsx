export default function AboutCodex(){
    return (
        <section className="about-codex">
            <div className="text">Codex adalah platform latihan coding interaktif yang dirancang untuk membantu pengguna mengasah keterampilan pemrograman mereka melalui berbagai tantangan pemrograman. Di Codex, pengguna dapat memilih dari berbagai soal latihan yang mencakup berbagai tingkat kesulitan dan topik, mulai dari algoritma dasar hingga struktur data yang kompleks. Codex memungkinkan pengguna untuk menjalankan kode mereka melawan serangkaian kasus uji, membantu mereka mempelajari dan memahami konsep-konsep pemrograman secara mendalam.</div>
            <div className="rules">
                <h4>Instruksi Umum</h4>
                <ul>
                    <li>Terdapat 3 tingakt kesulitan soal (Mudah, Sedang, dan Sulit)</li>
                    <li>Terdapat 2 bahasa pemrograman yang bisa digunakan untuk mengerjakan soal (Javascript dan Python)</li>
                    <li>Nama function telah ditentukan pada tiap soal dan telah dideklarasikan, tidak diperbolehkan untuk mengubah nama function dan parameternya</li>
                    <li>Gunakan return untuk menjalankan output pada function yang telah disediakan</li>
                    <li>Tidak diperbolehkan menambahkan fungsi <code>console.log()</code> pada bahasa pemrograman javascript dan fungsi <code>print()</code> pada bahasa pemrograman python </li>
                </ul>
            </div>
        </section>
    )
}
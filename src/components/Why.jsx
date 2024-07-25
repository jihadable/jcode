import { IconBrandAsana, IconMessage2, IconProgressCheck } from "@tabler/icons-react";

export default function Why(){
    return (
        <section className="why">
            <div className="title">Kenapa Memilih Kami</div>
            <div className="content">
                <div className="item">
                    <div className="svg">
                        <IconMessage2 stroke={1.5} />
                    </div>
                    <div className="title">KOMUNIKASI</div>
                    <div className="text">Kami mengutamakan komunikasi efektif dengan mentor responsif dan komunitas online yang aktif. Hal ini memastikan Anda selalu mendapatkan dukungan yang Anda butuhkan dalam perjalanan belajar programming Anda.</div>
                </div>
                <div className="item">
                    <div className="svg">
                        <IconProgressCheck stroke={1.5} />
                    </div>
                    <div className="title">PROGRES</div>
                    <div className="text">Kami telah merancang kurikulum yang terstruktur, memungkinkan Anda untuk berkembang langkah demi langkah. Dengan pencapaian yang jelas, Anda dapat melacak kemajuan Anda dan meraih tujuan dengan percaya diri.</div>
                </div>
                <div className="item">
                    <div className="svg">
                        <IconBrandAsana stroke={1.5} />
                    </div>
                    <div className="title">PRAKTIK</div>
                    <div className="text">Di Jcode, kami menekankan praktik langsung. Latihan coding interaktif dan proyek-proyek kami memberikan Anda pengalaman praktis yang dibutuhkan untuk unggul dalam programming.</div>
                </div>
            </div>
        </section>
    )
}
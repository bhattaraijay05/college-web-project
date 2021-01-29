import React from "react";
import AboutImage from "../../assets/images/about.jpg";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="card" style={{ width: "80vw" }}>
        <div
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <img
            src={AboutImage}
            className="card-img-top"
            style={{ width: "18rem", height: "14rem" }}
            alt="images"
          />
        </div>
        <div className="card-body">
          <p className="card-text">
            Sri madhva Vijaya ("The story of the victory of Madhva"), is a
            biographical work of the great Dvaita philosopher Sri Madhvacharya.
            It is authored by Sri Narayana Panditacharya, who was the son of Sri
            Trivikrama Panditacharya, one of the direct disciples of
            Madhvacharya. Sri Trivikrama Panditacharya was a famous advaita
            exponent of his time and converted himself to the Madhva faith after
            disputation with Sri Madhvacharya himself for 7–8 days in Kasargod
            of Kerala. He is also the author of the famous "Vayu Stuti" which is
            recited by all devote Madhvas, daily, till date.
            <br />
            Sumadhva Vijaya is a Sanskrit work and is composed of 16 sargas or
            cantos. It starts with a description of the first two Avatars of
            Vayu, namely Hanuman and Bhima. It then proceeds to describe the
            life of Sri Madhva, who is considered the third avatar. Sumadhva
            Vijaya contains detailed descriptions of various incidents of Sri
            Madhva's life and is the only authentic source of information about
            Madhvacharya that exists. Sri Narayana Panditacharya was a
            contemporary of Sri Madhva which greatly adds to the authenticity of
            the work. The work contains many personal and intimate details of
            Sri Madhvacharya's daily routine.
            <br />
            Sumadhva Vijaya is a Maha Kavya and its style meets all the
            requirements of a Maha Kavya of Sanskrit Literature. Sumadhva Vijaya
            has several commentaries written on it which greatly helps the
            understanding of the Maha Kavya. Sri Narayana Panditacarya himself
            has written a commentary on his Maha Kavya Madhva Vijaya. This
            commentary is called Bhava Prakashika. This is a very useful
            commentary because the poet himself gives the Kannada and Tulu names
            of several persons who are a part of Sri Madhvacharya's Biography
            and the places which Sri Madhvacarya has visited. In the Kavya these
            names are Sanskritised. The next oldest commentary on Sumadhva
            Vijaya is by Sri Vedanga Tirtha, one of the saints of the Sode Mutt.
            This commentary is called Padartha Dipika. Another commentary which
            is also in vogue is the "Padartha Dipikodbodhika" of Sri Vishwapati
            Tirtha of Pejavara Mutt. "Mandopakarini" of Sri Chalari Sheshacharya
            is also quite popular. All the commentaries are in print. Sri Madhva
            Vijaya has also been recited by many artists, such as Sri
            Vidhyabooshana.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

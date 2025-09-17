import bmx from "./assets/bmx.PNG";
import bmx2 from "./assets/bmx2.PNG";
import llamta from "./assets/llamta.PNG";
import goma from "./assets/goma.PNG";
import asiento from "./assets/asiento.PNG";
import casco from "./assets/casco.PNG";
import casco2 from "./assets/casco2.PNG";
import prote from "./assets/prote.PNG";
import bmx3 from "./assets/bmx3.PNG";

const productosFactor = [
  { 
    nombre: "BICICLETA STRANGER LEVEL CASS", 
    precio: 1270000, 
    imagen: bmx, 
    categoria: "armadas", 
    id: "1",
    descripcion: "La Stranger Level Cass es una bicicleta BMX de alta gama diseñada para riders exigentes. Equipada con cuadro de acero Chromoly, transmisión Cassette y componentes de primera calidad que ofrecen durabilidad y resistencia para trucos de calle y park."
  },
  { 
    nombre: "BICICLETA STRANGER SPITFIRE", 
    precio: 1125000, 
    imagen: bmx2, 
    categoria: "armadas", 
    id: "2",
    descripcion: "La Stranger Spitfire es una BMX completa ideal para quienes buscan iniciarse en el freestyle con un producto confiable. Cuenta con geometría moderna, cuadro de acero reforzado y piezas resistentes, perfecta para saltos y maniobras urbanas."
  },
  { 
    nombre: "LLANTA PRIMO VSXL PINNED VERSION", 
    precio: 92000, 
    imagen: llamta, 
    categoria: "parts", 
    id: "3",
    descripcion: "Llanta Primo VSXL Pinned Version, fabricada en aluminio de alta resistencia con tecnología pinned que asegura mayor rigidez y estabilidad. Ideal para armar ruedas duraderas que soporten el impacto de trucos agresivos."
  },
  { 
    nombre: "CAMARA PRIMO 20X2.20/2.50 SV", 
    precio: 165000, 
    imagen: goma, 
    categoria: "parts", 
    id: "4",
    descripcion: "Cámara de aire Primo 20x2.20/2.50 con válvula Schrader. Diseñada para neumáticos de BMX de uso intensivo, ofrece resistencia a pinchaduras y un ajuste perfecto para llantas anchas."
  },
  { 
    nombre: "ASIENTO CULT HEMP SLIM PIVOTAL", 
    precio: 63000, 
    imagen: asiento, 
    categoria: "parts", 
    id: "5",
    descripcion: "Asiento CULT Hemp Slim Pivotal con diseño ergonómico y recubrimiento en tela de cáñamo resistente. Su sistema pivotal asegura un montaje sencillo y un look único para tu bicicleta."
  },
  { 
    nombre: "CASCO PROTEC LOW PRO MATTE CABALLERO", 
    precio: 165000, 
    imagen: casco, 
    categoria: "protecciones", 
    id: "6",
    descripcion: "Casco PROTEC Low Pro Matte Caballero, clásico y confiable para BMX. Cumple con normativas de seguridad, cuenta con ventilación estratégica y un acabado mate moderno, brindando protección y estilo."
  },
  { 
    nombre: "CASCO NO NAME", 
    precio: 28000, 
    imagen: casco2, 
    categoria: "protecciones", 
    id: "7",
    descripcion: "Casco económico de nivel inicial, perfecto para quienes comienzan a andar en BMX y buscan protección básica sin gastar de más. Ligero, ajustable y con ventilación adecuada para uso recreativo."
  },
  { 
    nombre: "PROTEC STREET PADS 3PACK ADULTO", 
    precio: 170000, 
    imagen: prote, 
    categoria: "protecciones", 
    id: "8",
    descripcion: "Pack de protecciones PROTEC Street Pads 3Pack para adultos. Incluye rodilleras, coderas y muñequeras. Con diseño ergonómico y materiales resistentes, es ideal para reducir el riesgo de lesiones en caídas."
  },
  { 
    nombre: "BICICLETA SUNDAY PRIMER 2019", 
    precio: 1500000, 
    imagen: bmx3, 
    categoria: "armadas", 
    id: "9",
    descripcion: "La Sunday Primer 2019 es una BMX de nivel intermedio con cuadro Chromoly y geometría versátil. Su montaje incluye piezas de alta calidad que brindan estabilidad, ideal para evolucionar en street, park o dirt."
  }
];

export default productosFactor;

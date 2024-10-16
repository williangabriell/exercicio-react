import Image from 'next/image';

export default function Imagem (){
    return (
        <Image src="https://www.pexels.com/pt-br/foto/cidade-meio-urbano-restaurante-rua-16292048/" 
               alt="Restaurante francês La Marquise"
               width={500}
               height={300}
         />
    )
}
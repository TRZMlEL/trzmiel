  import React, { useState } from 'react';
  
  import Building from './img/TRZ9137-Poprawione-Szum.jpg';
  import Stars from './img/Gwiazdy.jpg';
  import WildTran from './img/TRZ8462.jpg';
  import MeOnTrain from './img/TRZ3349-2.jpg';
  import PurpleSkyTree from './img/TRZ3442.jpg';
  import LoveSky from './img/TRZ3497.jpg';
  import WoodenLuckyDog from './img/TRZ3779.jpg';
  import TowerRoof from './img/TRZ3967.jpg';
  import OldRedCar from './img/TRZ6986.png';
  import OldWoodenChurch from './img/TRZ7147.jpg';
  import GateInTheWild from './img/TRZ8479-6.jpg'
  import CrushedCan from './img/TRZ8872.jpg';
  import FastTrain from './img/TRZ8897.jpg';
  import Sunset1 from './img/TRZ8975.jpg';
  import Sunset2 from './img/TRZ8977.jpg';
  import LadybugOnAFieldFlower from './img/TRZ8987.jpg';
  import TreeInSunset from './img/DSC00405.jpg';
  import Fireworks1 from './img/DSC00756.jpg'
  import Fireworks2 from './img/DSC00781.jpg'
  import SparkStickCircle from './img/sylwester insta 1.png'

  function Photos() {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (imageSrc) => {
      setSelectedImage(imageSrc);
    };

    const handleCloseImage = () => {
      setSelectedImage(null);
    };

    return (
      <div className='photo-gallery bg-color w-screen mt-6rem flex items-center justify-center pt-4rem flex-col'>
        <div className='w-full mb-2rem flex items-center justify-center'>
            <h2 className='font-semibold text-3xl'>PHOTOS</h2>
        </div>
        <div className='thumbnails h-auto flex flex-wrap justify-center gap-1rem mb-4rem pl-16rem pr-16rem'>
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={Building} draggable="false" onClick={() => handleImageClick(Building)} alt="Building" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={Stars} draggable="false" onClick={() => handleImageClick(Stars)} alt="Stars" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={WildTran} draggable="false" onClick={() => handleImageClick(WildTran)} alt="Wild tran" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={MeOnTrain} draggable="false" onClick={() => handleImageClick(MeOnTrain)} alt="Me on train" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={PurpleSkyTree} draggable="false" onClick={() => handleImageClick(PurpleSkyTree)} alt="Purple sky tree" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={LoveSky} draggable="false" onClick={() => handleImageClick(LoveSky)} alt="LoveSky" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={WoodenLuckyDog} draggable="false" onClick={() => handleImageClick(WoodenLuckyDog)} alt="Wooden lucky dog" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={TowerRoof} draggable="false" onClick={() => handleImageClick(TowerRoof)} alt="Tower roof" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={OldRedCar} draggable="false" onClick={() => handleImageClick(OldRedCar)} alt="Old red car" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={OldWoodenChurch} draggable="false" onClick={() => handleImageClick(OldWoodenChurch)} alt="Old wooden church" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={GateInTheWild} draggable="false" onClick={() => handleImageClick(GateInTheWild)} alt="Gate in the wild" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={CrushedCan} draggable="false" onClick={() => handleImageClick(CrushedCan)} alt="Crushed can" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={FastTrain} draggable="false" onClick={() => handleImageClick(FastTrain)} alt="Fast train" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={Sunset1} draggable="false" onClick={() => handleImageClick(Sunset1)} alt="Sunset 1" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={Sunset2} draggable="false" onClick={() => handleImageClick(Sunset2)} alt="Sunset 2" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={LadybugOnAFieldFlower} draggable="false" onClick={() => handleImageClick(LadybugOnAFieldFlower)} alt="Ladybug on a field flower" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={TreeInSunset} draggable="false" onClick={() => handleImageClick(TreeInSunset)} alt="Tree in sunset" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={Fireworks1} draggable="false" onClick={() => handleImageClick(Fireworks1)} alt="Fireworks 1" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={Fireworks2} draggable="false" onClick={() => handleImageClick(Fireworks2)} alt="Fireworks 2" />
          <img className="h-10rem w-13rem object-cover border-4 border-dark cursor-pointer rounded-lg" src={SparkStickCircle} draggable="false" onClick={() => handleImageClick(SparkStickCircle)} alt="Spark stick circle" />
        </div>
        <div className="absolute w-auto bg-gray flex items-center justify-center z-20 cursor-pointer" onClick={handleCloseImage}>
          {selectedImage && <img className=' max-h-40rem border-8 border-dark' src={selectedImage} alt="Selected" />}
        </div>
      </div>
    );
  }

  export default Photos;
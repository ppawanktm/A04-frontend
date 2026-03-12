import Banner from '../components/Banner';
import Card from '../components/Card';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FDFBFB] pb-16">
      <Banner />
      <div className="max-w-7xl mx-auto px-5 mt-10 flex flex-wrap justify-center gap-8">
        <Card 
          venueName="The Bloom Pavilion" 
          imgSrc="/img/bloom.jpg" 
        />
        <Card 
          venueName="Spark Space" 
          imgSrc="/img/sparkspace.jpg" 
        />
        <Card 
          venueName="The Grand Table" 
          imgSrc="/img/grandtable.jpg" 
        />
      </div>
    </main>
  );
}
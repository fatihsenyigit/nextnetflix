import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-[url(/images/hero.jpg)] relative h-screen w-full bg-no-repeat bg-fixed bg-center">
      <div className="bg-black/50 w-full h-full">
        <div className="text-white text-center relative top-2/4 m-auto">
          <h1 className="text-5xl font-[900] mb-3">
            Unlimited movies, TV shows and more
          </h1>
          <p className="text-2xl font-[400]">Watch anywhere, Cancel anytime.</p>
          {/*
        next link arka planda sayfayi onceden fetch edilir. bu client tarafi gezintilerin performansini iyilestirmek icin kullanilislidir. gorunum alanindaki herhangi bir <Link/> onceden yuklenecektir
        */}
          <Link href="/register">
            <button className="btn-danger w-[250px]">Get Started</button>
          </Link>
        </div>
      </div>
    </main>
  );
}

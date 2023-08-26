import Image from "next/image";
import LaptopImage from "/public/laptop.png";

const categories = [
  {
    name: 'Latest'
  },
  {
    name: 'Design'
  },
  {
    name: 'Website'
  },
  {
    name: 'Tech'
  },
]

const post = {
  title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.',
  categories: [
    {
      name: 'Programming',
    },
    {
      name: 'Website',
    },
    {
      name: 'Tech',
    },
  ],
  owner: 'Bakaran Project',
  createdAt: '20 January 2022',
  cover: LaptopImage
}

function Header() {
  return <div className="fixed top-0 left-0 right-0 bg-white flex flex-row justify-between h-16 items-center px-6">
    <div></div>
    <nav className="flex flex-row gap-3 font-semibold">
      <span>Home</span>
      <span>Service</span>
      <span>Our Service</span>
      <span>Our Works</span>
      <span>About us</span>
    </nav>
    <button className="rounded-full bg-secondary-blue text-white px-6 py-2">Log In</button>
  </div>
}

function ButtonCategory(item) {
  return <button className="px-6 border-2 font-semibold border-primary-blue text-primary-blue rounded-full">{item.name}</button>
}

function ButtonPostCategory(category) {
  return <button className="bg-secondary-blue rounded-md px-6 py-1 text-white">{category.name}</button>
}

function CardPost(post) {
  return <div className="flex flex-col gap-2">
    <Image src={post.cover} alt="cover" />
    <span className="font-semibold">{post.owner} <span className="font-normal">{post.createdAt}</span></span>
    <h1 className="text-2xl font-bold">{post.title}</h1>
    <p className="text-slate-400">{post.description}</p>
    <div className="flex flex-row gap-2">
      {post.categories.map((category) => ButtonPostCategory(category))}
    </div>
  </div>
}

export default function Page() {
  let posts = [];
  for (let i = 0; i < 10; i++) {
    posts.push(post)
  }
  return (
    <main className="relative flex flex-col gap-6 px-12 min-h-screen bg-white text-primary-blue pt-16">
      <Header />
      <h1 className="text-center text-4xl font-semibold">Blog Site</h1>
      <div className="flex flex-row gap-4 justify-center">
        {categories.map((item) => ButtonCategory(item))}
      </div>
      <div className="flex flex-row gap-4">
        <Image src={post.cover} alt="laptop" />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">{post.owner} {post.createdAt}</span>
          <h1 className="text-2xl font-bold">{post.title}</h1>
          <p className="text-slate-400">{post.description}</p>
          <div className="flex flex-row gap-2">
            {post.categories.map((category) => ButtonPostCategory(category))}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post) => CardPost(post))}
      </div>
    </main>
  );
}

"use client";

// const HeavyComponent = dynamic(() => import("./components/HeavyComponent"), {
//   loading: () => <p>Loading...</p>,
// });

export default function Home() {
  // const session = await getServerSession(authOptions);
  // const [isVisible, setVisible] = useState(false);
  return (
    <main className="relative">
      {/* <Images
        src="https://bit.ly/react-cover"
        fill
        alt="ah cs print"
        className="object-cover"
        sizes="50vw"
      /> */}
      <h1>Hello World</h1>
      <button
        className="btn"
        onClick={async () => {
          const _ = (await import("lodash")).default;
          const users = [{ name: "c" }, { name: "b" }, { name: "a" }];
          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
      {/* {isVisible && <HeavyComponent />} */}
    </main>
  );
}

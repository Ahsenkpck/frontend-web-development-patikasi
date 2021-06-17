import "./App.css";
import Card from "./components/Card/Card";

function App() {
  const recipeAuthor = "Kodluyoruz";
  const recipeItem = {
    title: "Hünkar Beğendi",
    date: "16 Mart 2021, Cuma",
    image: "https://i.lezzet.com.tr/images-xxlarge-recipe/hunkar-begendi-27ede261-f6c4-4f44-ada3-b3fb6b8dd72c.jpg",
    description:
      "Hünkar beğendi veya kısaca beğendi, közlenmiş patlıcan ve meyane ile hazırlanmış bir yatak üzerinde pişirilmiş etin servis edildiği bir Türk yemeğidir.",
  };

  const likeCount = 193;
  const isLiked = false;



  return (
    <div className="App">
      <header className="App-header">
        <Card
          /* prop ismi = { değişken } */
          author={recipeAuthor}
          title={recipeItem.title}
          date={recipeItem.date}
          image={recipeItem.image}
          description={recipeItem.description}
          likeCount={likeCount}
          isLiked={isLiked}
        />
      </header>
    </div>
  );
}

export default App;

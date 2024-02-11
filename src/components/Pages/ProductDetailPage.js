import React from "react";
import { useContext } from "react";
import { Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartContext from "../../Store/CartContext";
import Header from "../Header.jsx";
import CartModal from "../CartModal.jsx";
import Footer from "../Footer.jsx";

const ProductDetailPage = () => {
  const cartCTX = useContext(CartContext);
  const params = useParams();
  const [modalShow, setModalShow] = React.useState(false);

  const productsArr = [
    {
      title: "Colors",
      id: "1",
      price: 100,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, qui quibusdam commodi cumque saepe, sint, cum maiores nostrum incidunt omnis atque eius consequuntur nam magnam vel esse. Aperiam obcaecati harum quam nostrum molestiae dolorem id cumque ad, provident dolorum eos consectetur? Ratione provident debitis dolores quasi vitae impedit possimus at tenetur unde inventore, eaque rem animi facere hic dolorum a necessitatibus voluptatum, corrupti eligendi. Magnam neque corrupti iusto reiciendis, rem cumque expedita vel maiores libero voluptate nemo dolor quo deserunt quod excepturi culpa voluptatum, quas facere? Repudiandae aliquam sed omnis incidunt ipsam odit magnam temporibus optio adipisci! Numquam aut soluta ipsa quaerat fugiat nemo itaque totam fuga reprehenderit fugit cupiditate qui animi ut nam perferendis corrupti nihil error hic, optio recusandae tenetur? Recusandae suscipit eaque, officiis minus hic fugiat corporis quod quo voluptate, autem omnis reiciendis. Facilis, ullam ex. Eveniet alias eos nostrum tenetur ratione ab adipisci aperiam commodi reprehenderit mollitia odio, id sit debitis ducimus similique explicabo quod magnam consequuntur ipsa voluptate, veritatis est quaerat assumenda. Reiciendis eligendi ipsa necessitatibus harum veritatis possimus distinctio laboriosam praesentium veniam in! Praesentium quo tenetur dicta iste, laborum officiis magnam totam dolores illum aut. Voluptatum delectus sit maiores obcaecati magnam laboriosam! Dicta, asperiores.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      id: "2",
      price: 50,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, qui quibusdam commodi cumque saepe, sint, cum maiores nostrum incidunt omnis atque eius consequuntur nam magnam vel esse. Aperiam obcaecati harum quam nostrum molestiae dolorem id cumque ad, provident dolorum eos consectetur? Ratione provident debitis dolores quasi vitae impedit possimus at tenetur unde inventore, eaque rem animi facere hic dolorum a necessitatibus voluptatum, corrupti eligendi. Magnam neque corrupti iusto reiciendis, rem cumque expedita vel maiores libero voluptate nemo dolor quo deserunt quod excepturi culpa voluptatum, quas facere? Repudiandae aliquam sed omnis incidunt ipsam odit magnam temporibus optio adipisci! Numquam aut soluta ipsa quaerat fugiat nemo itaque totam fuga reprehenderit fugit cupiditate qui animi ut nam perferendis corrupti nihil error hic, optio recusandae tenetur? Recusandae suscipit eaque, officiis minus hic fugiat corporis quod quo voluptate, autem omnis reiciendis. Facilis, ullam ex. Eveniet alias eos nostrum tenetur ratione ab adipisci aperiam commodi reprehenderit mollitia odio, id sit debitis ducimus similique explicabo quod magnam consequuntur ipsa voluptate, veritatis est quaerat assumenda. Reiciendis eligendi ipsa necessitatibus harum veritatis possimus distinctio laboriosam praesentium veniam in! Praesentium quo tenetur dicta iste, laborum officiis magnam totam dolores illum aut. Voluptatum delectus sit maiores obcaecati magnam laboriosam! Dicta, asperiores.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      id: "3",
      price: 70,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, qui quibusdam commodi cumque saepe, sint, cum maiores nostrum incidunt omnis atque eius consequuntur nam magnam vel esse. Aperiam obcaecati harum quam nostrum molestiae dolorem id cumque ad, provident dolorum eos consectetur? Ratione provident debitis dolores quasi vitae impedit possimus at tenetur unde inventore, eaque rem animi facere hic dolorum a necessitatibus voluptatum, corrupti eligendi. Magnam neque corrupti iusto reiciendis, rem cumque expedita vel maiores libero voluptate nemo dolor quo deserunt quod excepturi culpa voluptatum, quas facere? Repudiandae aliquam sed omnis incidunt ipsam odit magnam temporibus optio adipisci! Numquam aut soluta ipsa quaerat fugiat nemo itaque totam fuga reprehenderit fugit cupiditate qui animi ut nam perferendis corrupti nihil error hic, optio recusandae tenetur? Recusandae suscipit eaque, officiis minus hic fugiat corporis quod quo voluptate, autem omnis reiciendis. Facilis, ullam ex. Eveniet alias eos nostrum tenetur ratione ab adipisci aperiam commodi reprehenderit mollitia odio, id sit debitis ducimus similique explicabo quod magnam consequuntur ipsa voluptate, veritatis est quaerat assumenda. Reiciendis eligendi ipsa necessitatibus harum veritatis possimus distinctio laboriosam praesentium veniam in! Praesentium quo tenetur dicta iste, laborum officiis magnam totam dolores illum aut. Voluptatum delectus sit maiores obcaecati magnam laboriosam! Dicta, asperiores.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      id: "4",
      price: 100,
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, qui quibusdam commodi cumque saepe, sint, cum maiores nostrum incidunt omnis atque eius consequuntur nam magnam vel esse. Aperiam obcaecati harum quam nostrum molestiae dolorem id cumque ad, provident dolorum eos consectetur? Ratione provident debitis dolores quasi vitae impedit possimus at tenetur unde inventore, eaque rem animi facere hic dolorum a necessitatibus voluptatum, corrupti eligendi. Magnam neque corrupti iusto reiciendis, rem cumque expedita vel maiores libero voluptate nemo dolor quo deserunt quod excepturi culpa voluptatum, quas facere? Repudiandae aliquam sed omnis incidunt ipsam odit magnam temporibus optio adipisci! Numquam aut soluta ipsa quaerat fugiat nemo itaque totam fuga reprehenderit fugit cupiditate qui animi ut nam perferendis corrupti nihil error hic, optio recusandae tenetur? Recusandae suscipit eaque, officiis minus hic fugiat corporis quod quo voluptate, autem omnis reiciendis. Facilis, ullam ex. Eveniet alias eos nostrum tenetur ratione ab adipisci aperiam commodi reprehenderit mollitia odio, id sit debitis ducimus similique explicabo quod magnam consequuntur ipsa voluptate, veritatis est quaerat assumenda. Reiciendis eligendi ipsa necessitatibus harum veritatis possimus distinctio laboriosam praesentium veniam in! Praesentium quo tenetur dicta iste, laborum officiis magnam totam dolores illum aut. Voluptatum delectus sit maiores obcaecati magnam laboriosam! Dicta, asperiores.",
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const itemAddHandler = (id, title, imageUrl, price) => {
    cartCTX.addItem({
      id: id,
      title: title,
      imageUrl: imageUrl,
      price: price,
    });
    console.log("worked");
  };

  return (
    <>
      <Header onClick={() => setModalShow(true)} />
      <CartModal
        show={modalShow}
        onHide={() => setModalShow((prevState) => !prevState)}
      />
      {productsArr.map((product) => {
        return product.id === params.productId ? (
          <div key={product.id}>
            <h1>{product.title}</h1>
            <img src={product.imageUrl} alt="productImage"></img>{" "}
            <div>{product.description}</div>
            <Button
              variant="primary"
              onClick={() =>
                itemAddHandler(
                  product.id,
                  product.title,
                  product.imageUrl,
                  product.price
                )
              }
            >
              Add to Cart
            </Button>
          </div>
        ) : (
          ""
        );
      })}
      <Footer />
    </>
  );
};

export default ProductDetailPage;

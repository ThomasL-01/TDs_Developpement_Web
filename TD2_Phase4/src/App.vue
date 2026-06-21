<template>
  <div class="header">
    <h1>Gestionnaire de Stock</h1>
    <nav>
      <input
        type="search"
        placeholder="Rechercher un produit..."
        name="Rechercher"
        v-model="searchTerm"
      >
    </nav>
  </div>

  <section class="catalogue" id="catalogue">
    <p v-if="filteredProducts.length === 0" style="font-weight: bold; padding: 30px;">
      Aucun produit trouvé.
    </p>

    <article
      v-for="product in filteredProducts"
      :key="product.name"
      :name="product.name"
      class="produit"
    >
      <h3>{{ product.name }}</h3>
      <img :src="product.image" :alt="`Image de ${product.name}`" height="100" width="150">
      <p name="desc">{{ product.description }}</p>
      <p name="price">Prix : {{ product.price }}€</p>
      <p
        name="status"
        :class="product.status === 'En Stock' ? 'status_en-stock' : 'status_rupture'"
      >
        Statut : {{ product.status }}
      </p>
    </article>
  </section>

  <form @submit.prevent>
    <label for="name">Nom du produit :</label>
    <input type="text" id="name" name="nom" v-model="newProduct.name" required><br><br>

    <label for="desc">Description :</label>
    <input type="text" id="desc" name="description" v-model="newProduct.description" required><br><br>

    <label for="price">Prix :</label>
    <input type="number" id="price" name="Prix" v-model.number="newProduct.price" required><br><br>

    <label for="status">Statut :</label>
    <select id="status" name="Statut" v-model="newProduct.status" required>
      <option value="En Stock">En Stock</option>
      <option value="Rupture de Stock">Rupture de Stock</option>
    </select><br><br>

    <label for="image">URL de l'image :</label>
    <input type="url" id="image" name="image" v-model="newProduct.image" required><br><br>

    <input type="submit" value="Ajouter le produit" @click="addProduct">
  </form>
</template>

<script>
export default {
  name: "GestionnaireStock",
  data() {
    return {
      searchTerm: "",
      products: [
        {
          name: "Clavier mécanique",
          description: "Clavier RGB avec switchs rapides pour gaming et bureautique",
          price: 79,
          status: "En Stock",
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61jacONrzjL._AC_.jpg&f=1&nofb=1&ipt=1239aa6d20cb09df6f5b722ce68d819f50a89f0fbd4c0e8ac07f2278cafdaa4e"
        },
        {
          name: "Souris ergonomique",
          description: "Souris ergonomique avec capteur haute précision et autonomie longue durée",
          price: 39,
          status: "Rupture de stock",
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F61RD8Thd4dL._AC_SL1500_.jpg&f=1&nofb=1&ipt=73527ccbac108d10bf0dd8926d1a91b8d9dbfc3199ae3231947ac3d982725bfc"
        },
        {
          name: "Écran 24 pouces",
          description: "Écran full HD idéal pour le travail et le multimédia",
          price: 149,
          status: "En Stock",
          image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fm.media-amazon.com%2Fimages%2FI%2F71YdxZ6LwcL._AC_.jpg&f=1&nofb=1&ipt=3f571df03acf35c76fb6eb7d87a11d64418965086d4b7bf3a68793a1a5469398"
        }
      ],
      newProduct: {
        name: "",
        description: "",
        price: "",
        status: "En Stock",
        image: ""
      }
    };
  },
  computed: {
    filteredProducts() {
      const term = this.searchTerm.toLowerCase();
      return this.products.filter(product =>
        product.name.toLowerCase().includes(term)
      );
    }
  },
  methods: {
    addProduct() {
      const { name, description, price, image } = this.newProduct;

      if (name === "" || description === "" || price === "" || image === "") {
        alert("Veuillez remplir tous les champs.");
        return;
      }

      this.products.push({
        name,
        description,
        price: parseFloat(price),
        status: this.newProduct.status,
        image
      });

      alert("Produit ajouté avec succès !");

      this.newProduct = {
        name: "",
        description: "",
        price: "",
        status: "En Stock",
        image: ""
      };
    }
  }
};
</script>
<style>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: rgb(240, 240, 240);
}

.header {
    background-color: midnightblue; 
    padding-bottom: 5px;
    display: grid;  
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
}

.header h1 {
    color: white;
    padding: 20px;
    margin: 0;
    text-align: right;
    grid-area: 1 / 2;
}

.header nav {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    grid-area: 2 / 2;
}

.header input {
    padding: 5px;
    margin-right: 20px;
    border: none;
    border-radius: 5px;
}

.catalogue {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 250px));
    background-color: rgb(240, 240, 240);
    
}

.produit {
    background-color: white;
    
    padding: 10px;
    margin: 10px;
    text-align: center;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}

.produit h1 {
    font-size: 1.5em;
    margin-bottom: 10px;
}

.status_en-stock {
    padding: 2%;
    color: green;
    font-weight: bold;
    background-color: lightgreen;
    border-radius: 5px;
}

.status_rupture {
    padding: 2%;  
    color: red;
    font-weight: bold;
    background-color: lightcoral;
    border-radius: 5px;
}

form {
    background-color: white;
    padding: 20px;
    margin: 20px;
    box-shadow: 5px 5px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
}
.form label {
    display: block;
    margin-bottom: 5px;
}

.form input, .form select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form input[type="submit"] {
    background-color: midnightblue;
    color: white;
    border: none;
    cursor: pointer;
}
</style>
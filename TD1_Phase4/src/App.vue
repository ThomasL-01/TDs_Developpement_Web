<template>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Serveur de sécurité - Monitoring</title>
    </head>
    <body>
        <div class = "titre">
            
            <img src = "/src/logo.png" alt = "Logo de sécurité" height="200" width="200">
            <h1>Serveur de sécurité - Monitoring</h1>
        </div>
        <h1>Alertes de sécurité </h1>
        <table :id = "tableau">
            <thead> 
                <tr><th>ID</th><th>Date</th><th>Adresse IP Source</th><th>Type d'alerte</th><th>Niveau de sévérité</th></tr>
            </thead>
            <tbody>
                <tr v-for="ligne in lignes" :key="ligne.id">
                    <td>{{ ligne.id }}</td>
                    <td>{{ ligne.date }}</td>
                    <td>{{ ligne.ip }}</td>
                    <td>{{ ligne.type }}</td>
                    <td>{{ ligne.severite }}</td>
                </tr>
            </tbody>
        </table>

        <h2>Ajouter une règle</h2>
            <form onsubmit = "return false"> 
                <div class = "item-form">
                    <label>Port :</label>
                    <input type = "text" id: = "port" @input = "onInputPort">
                    <br>
                </div>
                <div class = "item-form">
                    <label>IP source :</label>
                    <input type = "text" id = "ip" @input = "onInputIp">
                    <br>
                </div>
                <div class = "item-form">
                    <label>Type:</label>
                    <select id = "type" @input = "onInputType">
                        <option>Intrusion</option>
                        <option>Scan de Port</option>
                    </select>
                    <br>
                </div>
                <div class = "item-form">
                    <label>Sévérité :</label>
                    <select id = "severite" @input = "onInputSeverite">
                        <option>Faible</option>
                        <option>Moyenne</option>
                        <option>Élevée</option>
                    </select>
                    <br>
                </div>
                <br>
                <div class = "item-form">
                    <label>Action :</label>
                    <br>
                    <div>
                        <label for="Autoriser">Autoriser</label>
                        <input type = "radio" value = "Autoriser" id = "Autoriser" name = "action" @input = "onInputAction">
                        <label for="Bloquer">Bloquer</label>
                        <input type = "radio" value = "Bloquer" id = "Bloquer" name = "action" @input = "onInputAction">
                    </div>
                    <br>
                </div>
                
                <button class = "add" type="submit" :id = "valider" @click="ajouterLigne">Ajouter</button>
            </form>
        
        <h2>Veille sécurité</h2>
        <article>
            <h3> Nouvelle faille détectée</h3>
            <p>Une vulnérabilité critique a été identifiée sur certains serveurs web.</p>
            <a href="">Lire le rapport</a>
        </article>
        <br>
        <article>
            <h3>Mise à jour de sécurité</h3>
            <p>Un correctif important est disponible pour les systèmes Linux.</p>
            <a href="">Voir les détails</a>
        </article>
    </body>
</html>

</template>

<script>
export default {
    data() {
        let id = 1;
        let lignes = [{"id": "001", "date": "Thu May 07 2026 11:48:20 GMT+0200 (heure d’été d’Europe centrale)", "ip": "192.168.1.10", "type": "Intrusion", "severite": "Élevée"}];
        return {
            id,
            lignes,
            port: "",
            ip: "",
            type: "Intrusion",
            severite: "Faible",
            action: ""
        }
    },
    methods: {
        ajouterLigne() {
            if (this.port === "" || this.ip === "" || this.action === "") {
                alert("Veuillez remplir tous les champs.");
                return;
            }
            this.id++;
            let text_id;
            if (this.id < 10) {
                text_id = "00"+this.id;
            }
            else if (this.id < 100) {
                text_id = "0"+this.id;
            }
            else {
                text_id = this.id;
            }
            const ligne = {"id": text_id, "date": new Date().toString(), "ip": this.ip, "type": this.type, "severite": this.severite};
            this.lignes.unshift(ligne);
        },

        onInputPort(e) {
            this.port = e.target.value;
        },

        onInputIp(e) {
            this.ip = e.target.value;
        },

        onInputType(e) {
            this.type = e.target.value;
        },

        onInputSeverite(e) {
            this.severite = e.target.value;
        },

        onInputAction(e) {
            this.action = e.target.value;
        }

    }
}
</script>

<style>
    html {
        font-family:Arial, Helvetica, sans-serif;
        background-color: rgb(216, 216, 216);
    }

    .titre {
        background-color: slategray;
        display: flex;
        padding: 0%;

    }

    h1 {
        padding-left: 1%;
        padding-top: 4%;
    }

    h3 {
        padding-left: 1%;
    }

    p {
        padding-left: 2%;
    }

    a {
        padding-left: 1%;
        padding-bottom: 1%;
    }

    form {

        background-color: whitesmoke;
        border: solid ;
        border-radius: 15px;
        margin: auto; 
    }

    .item-form {
        padding-top: 2%;
        padding-left: 2%;
    }

    .add {
        background-color: skyblue;
        margin-left: 5%;
        margin-bottom: 2%;
    }


    table {
        width: 100%;
        text-align: left;
        align-items: center;
        margin: auto;
        border: 2px;
        border-radius: 1px;
    }

    thead {
        text-align: center;
        background-color: lightslategray;
    }


    article {
        background-color: whitesmoke;
        border-radius: 15px;
        border: solid ;
    }
</style>
import {
    tendanceNav, runningNav2, footballNav, vetementNav, uniquementNav, outdoorNav, FitnessNav, golfNav, runningNav, imgNavbar, shoes1, shoes2, shoes3, shoes4, shoes5, vet1, vet2, vet3, vet4, vet5, vet6, vet7, vet8, acc1, acc2, acc3, acc4, meilleur1, meilleur2, meilleur3, meilleur4, meilleur5, meilleur6, meilleur7, meilleur8, meilleur9, meilleur10, meilleur11, meilleur12, femme1, femme10, femme11, femme12, femme2, femme3, femme4, femme5, femme6, femme7, femme8, femme9, prochaine1, prochaine2, prochaine3, prochaine4, prochaine5, prochaine6, videoOne, videoTwo, videoThree, imgVideo0ne, imgVideoTwo
} from "../assets"



const listOne = [
    {
        title: "HOMMES",
        categories: [
            {
                subtitle: "chaussures",
                subcategories: [
                    {
                        sub: "Toutes les chaussures",
                        link: "/toutes-commandes-hommes"
                    },
                    {
                        sub: "Baskets",
                        link: "/baskets-hommes"
                    },
                    {
                        sub: "Running",
                        link: "/running-hommes"
                    },
                    {
                        sub: "Football",
                        link: "/football-hommes"

                    },
                    {
                        sub: "Randonnéé & Outdoor",
                        link: "/randonee-hommes"

                    },
                    {
                        sub: "Claquettes & Tongs",
                        link: "/claquette-hommes"

                    },
                    {
                        sub: "Fitness et training",
                        link: "/fitness-hommes"

                    },
                    {
                        sub: "Marche",
                        link: "/marche-hommes"

                    },
                    {
                        sub: "Basketball",
                        link: "/basketball-hommes"

                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"

                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promos-hommes"

                    },
                    {
                        sub: "Chaussures: jusqu'à -40%",
                        link: "/chaussures-super-promos-hommes"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Vêtements",
                subcategories: [
                    {
                        sub: "Toutes les vêtements",
                        link: "/vêtements-hommes"
                    },
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "T-shirts & Tops",
                        link: "/tops-hommes"
                    },
                    {
                        sub: "Joggings & bas de survêtement",
                        link: "/joggings-hommes"

                    },
                    {
                        sub: "Hoodies",
                        link: "/hoddies-hommes"

                    },
                    {
                        sub: "Sweat-shirts",
                        link: "/sweet-hommes"
                    },
                    {
                        sub: "Vestes",
                        link: "/vestes-hommes"
                    },
                    {
                        sub: "Pantalons",
                        link: "/pontalons-hommes"
                    },
                    {
                        sub: "Survêtements",
                        link: "/survetement-hommes"
                    },
                    {
                        sub: "Maillots de football",
                        link: "/maillot-football-hommes"
                    },
                    {
                        sub: "Shorts",
                        link: "/Shorts-hommes"
                    },
                    {
                        sub: "Maillots de bain",
                        link: "/maillots-bain-hommes"
                    },
                    {
                        sub: "Vêtements: jusqu'à -40%",
                        link: "/vetements-super-promos-hommes"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Accessoires",
                subcategories: [
                    {
                        sub: "Toutes les accessoires",
                        link: "/accessoires-hommes"
                    },
                    {
                        sub: "Chaussettes",
                        link: "/chaussettes-hommes"
                    },
                    {
                        sub: "Accessoires tête",
                        link: "/accessoires-tete-hommes"
                    },
                    {
                        sub: "Sacs",
                        link: "/sacs-hommes"

                    },
                    {
                        sub: "Ballons",
                        link: "/ballons-hommes"

                    },
                    {
                        sub: "Sous-vêtements",
                        link: "/sous-vetements-hommes"
                    },
                    {
                        sub: "Accessoires hiver",
                        link: "/accessoires-hiver-hommes"
                    },
                    {
                        sub: "Accessoires: jusqu'à -40%",
                        link: "/accessoires-super-promos-hommes"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Fêtes des célibataires : jusqu'à -40%",
                subcategories: [
                    {
                        sub: "Chaussures",
                        link: "/chaussures-celibataires-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vêtements-celibataires-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-celibataires-hommes"
                    },

                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Coupe du Monde de la FIFA 2022™",
                subcategories: [
                    {
                        sub: "Collection Coupe du Monde de la FIFA™",
                        link: "/collection-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Tenues",
                        link: "/tenues-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Ballons de match",
                        link: "/ballons-coupe-du-monde-hommes"
                    },
                    {
                        sub: "TIRO",
                        link: "/tiro-coupe-du-monde-hommes"

                    },
                    {
                        sub: "Chaussures de football",
                        link: "/chassures-football-hommes"

                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Nouvelle saison",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/tous-produits-hommes"
                    },
                    {
                        sub: "Chaussures",
                        link: "/chassures-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-nouvelles-saison-hommes"

                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Sports",
                subcategories: [
                    {
                        sub: "Football",
                        link: "/fotball-hommes"
                    },
                    {
                        sub: "Training",
                        link: "/training-hommes"
                    },
                    {
                        sub: "Radonnée & Outdoor",
                        link: "/randonnee-hommes"
                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"
                    },
                    {
                        sub: "Tennis",
                        link: "/tennis-hommes"
                    },
                    {
                        sub: "Natations",
                        link: "/natations-hommes"
                    },
                    {
                        sub: "Autres sports",
                        link: "/autres-sports-hommes"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Marques",
                subcategories: [
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "Sportswear",
                        link: "/sports-wear-hommes"
                    },
                    {
                        sub: "Terrex",
                        link: "/terrex-hommes"
                    },
                    {
                        sub: "Y-3",
                        link: "/y-3-hommes"
                    },
                    {
                        sub: "Participons à mettre fin aux déchets plastiques",
                        link: "/participons-plastiques"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Uniquement chez adidas",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/produits-hommes"
                    },
                    {
                        sub: "chaussures",
                        link: "/chassures-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-hommes"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Nos produits Better Choices",
                subcategories: [
                    {
                        sub: "Fabriqué à partir de matières recyclées",
                        link: "/fabrique-recycle-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de matières vegan",
                        link: "/fabrique-vegan-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de coton bio",
                        link: "/fabrique-coton-hommes"
                    },
                    {
                        sub: "Nos produis Better Choices",
                        link: "/fabrique-hommes"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "À l'affiche",
                subcategories: [
                    {
                        sub: "Nouveautés",
                        link: "/nouveautes-hommes"
                    },
                    {
                        sub: "Tendances",
                        link: "/tendances-hommes"
                    },
                    {
                        sub: "Sorties sneakers",
                        link: "/sorties-sneakers-hommes"
                    },
                    {
                        sub: "Shop d'hiver",
                        link: "/shop-hiver-hommes"
                    },
                    {
                        sub: "Stan Smith",
                        link: "/stan-smith-hommes"
                    },
                    {
                        sub: "Sneakers noires",
                        link: "/sneakers-noires-hommes"
                    },
                    {
                        sub: "Vestes polaires",
                        link: "/vestes-polaires-hommes"
                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promo-hommes"
                    },
                ]
            },
            {
                cat: "HOMMES",
                subtitle: "Promos",
                subcategories: []
            }
        ]
    },
    {
        title: "FEMMES",
        categories: [
            {
                subtitle: "chaussures",
                subcategories: [
                    {
                        sub: "Toutes les chaussures",
                        link: "/toutes-commandes-hommes"
                    },
                    {
                        sub: "Baskets",
                        link: "/baskets-hommes"
                    },
                    {
                        sub: "Running",
                        link: "/running-hommes"
                    },
                    {
                        sub: "Football",
                        link: "/football-hommes"

                    },
                    {
                        sub: "Randonnéé & Outdoor",
                        link: "/randonee-hommes"

                    },
                    {
                        sub: "Claquettes & Tongs",
                        link: "/claquette-hommes"

                    },
                    {
                        sub: "Fitness et training",
                        link: "/fitness-hommes"

                    },
                    {
                        sub: "Marche",
                        link: "/marche-hommes"

                    },
                    {
                        sub: "Basketball",
                        link: "/basketball-hommes"

                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"

                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promos-hommes"

                    },
                    {
                        sub: "Chaussures: jusqu'à -40%",
                        link: "/chaussures-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                subcategories: [
                    {
                        sub: "Toutes les vêtements",
                        link: "/vêtements-hommes"
                    },
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "T-shirts & Tops",
                        link: "/tops-hommes"
                    },
                    {
                        sub: "Joggings & bas de survêtement",
                        link: "/joggings-hommes"

                    },
                    {
                        sub: "Hoodies",
                        link: "/hoddies-hommes"

                    },
                    {
                        sub: "Sweat-shirts",
                        link: "/sweet-hommes"
                    },
                    {
                        sub: "Vestes",
                        link: "/vestes-hommes"
                    },
                    {
                        sub: "Pantalons",
                        link: "/pontalons-hommes"
                    },
                    {
                        sub: "Survêtements",
                        link: "/survetement-hommes"
                    },
                    {
                        sub: "Maillots de football",
                        link: "/maillot-football-hommes"
                    },
                    {
                        sub: "Shorts",
                        link: "/Shorts-hommes"
                    },
                    {
                        sub: "Maillots de bain",
                        link: "/maillots-bain-hommes"
                    },
                    {
                        sub: "Vêtements: jusqu'à -40%",
                        link: "/vetements-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Accessoires",
                subcategories: [
                    {
                        sub: "Toutes les accessoires",
                        link: "/accessoires-hommes"
                    },
                    {
                        sub: "Chaussettes",
                        link: "/chaussettes-hommes"
                    },
                    {
                        sub: "Accessoires tête",
                        link: "/accessoires-tete-hommes"
                    },
                    {
                        sub: "Sacs",
                        link: "/sacs-hommes"

                    },
                    {
                        sub: "Ballons",
                        link: "/ballons-hommes"

                    },
                    {
                        sub: "Sous-vêtements",
                        link: "/sous-vetements-hommes"
                    },
                    {
                        sub: "Accessoires hiver",
                        link: "/accessoires-hiver-hommes"
                    },
                    {
                        sub: "Accessoires: jusqu'à -40%",
                        link: "/accessoires-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Fêtes des célibataires : jusqu'à -40%",
                subcategories: [
                    {
                        sub: "Chaussures",
                        link: "/chaussures-celibataires-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vêtements-celibataires-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-celibataires-hommes"
                    },

                ]
            },
            {
                subtitle: "Coupe du Monde de la FIFA 2022™",
                subcategories: [
                    {
                        sub: "Collection Coupe du Monde de la FIFA™",
                        link: "/collection-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Tenues",
                        link: "/tenues-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Ballons de match",
                        link: "/ballons-coupe-du-monde-hommes"
                    },
                    {
                        sub: "TIRO",
                        link: "/tiro-coupe-du-monde-hommes"

                    },
                    {
                        sub: "Chaussures de football",
                        link: "/chassures-football-hommes"

                    },
                ]
            },
            {
                subtitle: "Nouvelle saison",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/tous-produits-hommes"
                    },
                    {
                        sub: "Chaussures",
                        link: "/chassures-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-nouvelles-saison-hommes"

                    },
                ]
            },
            {
                subtitle: "Sports",
                subcategories: [
                    {
                        sub: "Football",
                        link: "/fotball-hommes"
                    },
                    {
                        sub: "Training",
                        link: "/training-hommes"
                    },
                    {
                        sub: "Radonnée & Outdoor",
                        link: "/randonnee-hommes"
                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"
                    },
                    {
                        sub: "Tennis",
                        link: "/tennis-hommes"
                    },
                    {
                        sub: "Natations",
                        link: "/natations-hommes"
                    },
                    {
                        sub: "Autres sports",
                        link: "/autres-sports-hommes"
                    },
                ]
            },
            {
                subtitle: "Marques",
                subcategories: [
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "Sportswear",
                        link: "/sports-wear-hommes"
                    },
                    {
                        sub: "Terrex",
                        link: "/terrex-hommes"
                    },
                    {
                        sub: "Y-3",
                        link: "/y-3-hommes"
                    },
                    {
                        sub: "Participons à mettre fin aux déchets plastiques",
                        link: "/participons-plastiques"
                    },
                ]
            },
            {
                subtitle: "Uniquement chez adidas",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/produits-hommes"
                    },
                    {
                        sub: "chaussures",
                        link: "/chassures-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-hommes"
                    },
                ]
            },
            {
                subtitle: "Nos produits Better Choices",
                subcategories: [
                    {
                        sub: "Fabriqué à partir de matières recyclées",
                        link: "/fabrique-recycle-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de matières vegan",
                        link: "/fabrique-vegan-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de coton bio",
                        link: "/fabrique-coton-hommes"
                    },
                    {
                        sub: "Nos produis Better Choices",
                        link: "/fabrique-hommes"
                    },
                ]
            },
            {
                subtitle: "À l'affiche",
                subcategories: [
                    {
                        sub: "Nouveautés",
                        link: "/nouveautes-hommes"
                    },
                    {
                        sub: "Tendances",
                        link: "/tendances-hommes"
                    },
                    {
                        sub: "Sorties sneakers",
                        link: "/sorties-sneakers-hommes"
                    },
                    {
                        sub: "Shop d'hiver",
                        link: "/shop-hiver-hommes"
                    },
                    {
                        sub: "Stan Smith",
                        link: "/stan-smith-hommes"
                    },
                    {
                        sub: "Sneakers noires",
                        link: "/sneakers-noires-hommes"
                    },
                    {
                        sub: "Vestes polaires",
                        link: "/vestes-polaires-hommes"
                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promo-hommes"
                    },
                ]
            },
            {
                subtitle: "Promos",
                subcategories: []
            }
        ]
    },
    {

        title: "ENFANTS",
        categories: [
            {
                subtitle: "Chaussures garçons",
                subcategories: [
                    {
                        sub: "Toutes les chaussures",
                        link: "/toutes-commandes-hommes"
                    },
                    {
                        sub: "Baskets",
                        link: "/baskets-hommes"
                    },
                    {
                        sub: "Running",
                        link: "/running-hommes"
                    },
                    {
                        sub: "Football",
                        link: "/football-hommes"

                    },
                    {
                        sub: "Randonnéé & Outdoor",
                        link: "/randonee-hommes"

                    },
                    {
                        sub: "Claquettes & Tongs",
                        link: "/claquette-hommes"

                    },
                    {
                        sub: "Fitness et training",
                        link: "/fitness-hommes"

                    },
                    {
                        sub: "Marche",
                        link: "/marche-hommes"

                    },
                    {
                        sub: "Basketball",
                        link: "/basketball-hommes"

                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"

                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promos-hommes"

                    },
                    {
                        sub: "Chaussures: jusqu'à -40%",
                        link: "/chaussures-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Vétement filles",
                subcategories: [
                    {
                        sub: "Toutes les vêtements",
                        link: "/vêtements-hommes"
                    },
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "T-shirts & Tops",
                        link: "/tops-hommes"
                    },
                    {
                        sub: "Joggings & bas de survêtement",
                        link: "/joggings-hommes"

                    },
                    {
                        sub: "Hoodies",
                        link: "/hoddies-hommes"

                    },
                    {
                        sub: "Sweat-shirts",
                        link: "/sweet-hommes"
                    },
                    {
                        sub: "Vestes",
                        link: "/vestes-hommes"
                    },
                    {
                        sub: "Pantalons",
                        link: "/pontalons-hommes"
                    },
                    {
                        sub: "Survêtements",
                        link: "/survetement-hommes"
                    },
                    {
                        sub: "Maillots de football",
                        link: "/maillot-football-hommes"
                    },
                    {
                        sub: "Shorts",
                        link: "/Shorts-hommes"
                    },
                    {
                        sub: "Maillots de bain",
                        link: "/maillots-bain-hommes"
                    },
                    {
                        sub: "Vêtements: jusqu'à -40%",
                        link: "/vetements-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Accessoires",
                subcategories: [
                    {
                        sub: "Toutes les accessoires",
                        link: "/accessoires-hommes"
                    },
                    {
                        sub: "Chaussettes",
                        link: "/chaussettes-hommes"
                    },
                    {
                        sub: "Accessoires tête",
                        link: "/accessoires-tete-hommes"
                    },
                    {
                        sub: "Sacs",
                        link: "/sacs-hommes"

                    },
                    {
                        sub: "Ballons",
                        link: "/ballons-hommes"

                    },
                    {
                        sub: "Sous-vêtements",
                        link: "/sous-vetements-hommes"
                    },
                    {
                        sub: "Accessoires hiver",
                        link: "/accessoires-hiver-hommes"
                    },
                    {
                        sub: "Accessoires: jusqu'à -40%",
                        link: "/accessoires-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Fêtes des célibataires : jusqu'à -40%",
                subcategories: [
                    {
                        sub: "Chaussures",
                        link: "/chaussures-celibataires-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vêtements-celibataires-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-celibataires-hommes"
                    },

                ]
            },
            {
                subtitle: "Coupe du Monde de la FIFA 2022™",
                subcategories: [
                    {
                        sub: "Collection Coupe du Monde de la FIFA™",
                        link: "/collection-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Tenues",
                        link: "/tenues-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Ballons de match",
                        link: "/ballons-coupe-du-monde-hommes"
                    },
                    {
                        sub: "TIRO",
                        link: "/tiro-coupe-du-monde-hommes"

                    },
                    {
                        sub: "Chaussures de football",
                        link: "/chassures-football-hommes"

                    },
                ]
            },
            {
                subtitle: "Nouvelle saison",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/tous-produits-hommes"
                    },
                    {
                        sub: "Chaussures",
                        link: "/chassures-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-nouvelles-saison-hommes"

                    },
                ]
            },
            {
                subtitle: "Sports",
                subcategories: [
                    {
                        sub: "Football",
                        link: "/fotball-hommes"
                    },
                    {
                        sub: "Training",
                        link: "/training-hommes"
                    },
                    {
                        sub: "Radonnée & Outdoor",
                        link: "/randonnee-hommes"
                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"
                    },
                    {
                        sub: "Tennis",
                        link: "/tennis-hommes"
                    },
                    {
                        sub: "Natations",
                        link: "/natations-hommes"
                    },
                    {
                        sub: "Autres sports",
                        link: "/autres-sports-hommes"
                    },
                ]
            },
            {
                subtitle: "Marques",
                subcategories: [
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "Sportswear",
                        link: "/sports-wear-hommes"
                    },
                    {
                        sub: "Terrex",
                        link: "/terrex-hommes"
                    },
                    {
                        sub: "Y-3",
                        link: "/y-3-hommes"
                    },
                    {
                        sub: "Participons à mettre fin aux déchets plastiques",
                        link: "/participons-plastiques"
                    },
                ]
            },
            {
                subtitle: "Uniquement chez adidas",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/produits-hommes"
                    },
                    {
                        sub: "chaussures",
                        link: "/chassures-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-hommes"
                    },
                ]
            },
            {
                subtitle: "Nos produits Better Choices",
                subcategories: [
                    {
                        sub: "Fabriqué à partir de matières recyclées",
                        link: "/fabrique-recycle-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de matières vegan",
                        link: "/fabrique-vegan-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de coton bio",
                        link: "/fabrique-coton-hommes"
                    },
                    {
                        sub: "Nos produis Better Choices",
                        link: "/fabrique-hommes"
                    },
                ]
            },
            {
                subtitle: "À l'affiche",
                subcategories: [
                    {
                        sub: "Nouveautés",
                        link: "/nouveautes-hommes"
                    },
                    {
                        sub: "Tendances",
                        link: "/tendances-hommes"
                    },
                    {
                        sub: "Sorties sneakers",
                        link: "/sorties-sneakers-hommes"
                    },
                    {
                        sub: "Shop d'hiver",
                        link: "/shop-hiver-hommes"
                    },
                    {
                        sub: "Stan Smith",
                        link: "/stan-smith-hommes"
                    },
                    {
                        sub: "Sneakers noires",
                        link: "/sneakers-noires-hommes"
                    },
                    {
                        sub: "Vestes polaires",
                        link: "/vestes-polaires-hommes"
                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promo-hommes"
                    },
                ]
            },
            {
                subtitle: "Promos",
                subcategories: []
            }
        ]
    },
    {
        title: "SPORTS",
        categories: [
            {
                subtitle: "chaussures Sport",
                subcategories: [
                    {
                        sub: "Toutes les chaussures",
                        link: "/toutes-commandes-hommes"
                    },
                    {
                        sub: "Baskets",
                        link: "/baskets-hommes"
                    },
                    {
                        sub: "Running",
                        link: "/running-hommes"
                    },
                    {
                        sub: "Football",
                        link: "/football-hommes"

                    },
                    {
                        sub: "Randonnéé & Outdoor",
                        link: "/randonee-hommes"

                    },
                    {
                        sub: "Claquettes & Tongs",
                        link: "/claquette-hommes"

                    },
                    {
                        sub: "Fitness et training",
                        link: "/fitness-hommes"

                    },
                    {
                        sub: "Marche",
                        link: "/marche-hommes"

                    },
                    {
                        sub: "Basketball",
                        link: "/basketball-hommes"

                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"

                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promos-hommes"

                    },
                    {
                        sub: "Chaussures: jusqu'à -40%",
                        link: "/chaussures-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                subcategories: [
                    {
                        sub: "Toutes les vêtements",
                        link: "/vêtements-hommes"
                    },
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "T-shirts & Tops",
                        link: "/tops-hommes"
                    },
                    {
                        sub: "Joggings & bas de survêtement",
                        link: "/joggings-hommes"

                    },
                    {
                        sub: "Hoodies",
                        link: "/hoddies-hommes"

                    },
                    {
                        sub: "Sweat-shirts",
                        link: "/sweet-hommes"
                    },
                    {
                        sub: "Vestes",
                        link: "/vestes-hommes"
                    },
                    {
                        sub: "Pantalons",
                        link: "/pontalons-hommes"
                    },
                    {
                        sub: "Survêtements",
                        link: "/survetement-hommes"
                    },
                    {
                        sub: "Maillots de football",
                        link: "/maillot-football-hommes"
                    },
                    {
                        sub: "Shorts",
                        link: "/Shorts-hommes"
                    },
                    {
                        sub: "Maillots de bain",
                        link: "/maillots-bain-hommes"
                    },
                    {
                        sub: "Vêtements: jusqu'à -40%",
                        link: "/vetements-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Accessoires",
                subcategories: [
                    {
                        sub: "Toutes les accessoires",
                        link: "/accessoires-hommes"
                    },
                    {
                        sub: "Chaussettes",
                        link: "/chaussettes-hommes"
                    },
                    {
                        sub: "Accessoires tête",
                        link: "/accessoires-tete-hommes"
                    },
                    {
                        sub: "Sacs",
                        link: "/sacs-hommes"

                    },
                    {
                        sub: "Ballons",
                        link: "/ballons-hommes"

                    },
                    {
                        sub: "Sous-vêtements",
                        link: "/sous-vetements-hommes"
                    },
                    {
                        sub: "Accessoires hiver",
                        link: "/accessoires-hiver-hommes"
                    },
                    {
                        sub: "Accessoires: jusqu'à -40%",
                        link: "/accessoires-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Fêtes des célibataires : jusqu'à -40%",
                subcategories: [
                    {
                        sub: "Chaussures",
                        link: "/chaussures-celibataires-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vêtements-celibataires-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-celibataires-hommes"
                    },

                ]
            },
            {
                subtitle: "Coupe du Monde de la FIFA 2022™",
                subcategories: [
                    {
                        sub: "Collection Coupe du Monde de la FIFA™",
                        link: "/collection-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Tenues",
                        link: "/tenues-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Ballons de match",
                        link: "/ballons-coupe-du-monde-hommes"
                    },
                    {
                        sub: "TIRO",
                        link: "/tiro-coupe-du-monde-hommes"

                    },
                    {
                        sub: "Chaussures de football",
                        link: "/chassures-football-hommes"

                    },
                ]
            },
            {
                subtitle: "Nouvelle saison",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/tous-produits-hommes"
                    },
                    {
                        sub: "Chaussures",
                        link: "/chassures-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-nouvelles-saison-hommes"

                    },
                ]
            },
            {
                subtitle: "Sports",
                subcategories: [
                    {
                        sub: "Football",
                        link: "/fotball-hommes"
                    },
                    {
                        sub: "Training",
                        link: "/training-hommes"
                    },
                    {
                        sub: "Radonnée & Outdoor",
                        link: "/randonnee-hommes"
                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"
                    },
                    {
                        sub: "Tennis",
                        link: "/tennis-hommes"
                    },
                    {
                        sub: "Natations",
                        link: "/natations-hommes"
                    },
                    {
                        sub: "Autres sports",
                        link: "/autres-sports-hommes"
                    },
                ]
            },
            {
                subtitle: "Marques",
                subcategories: [
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "Sportswear",
                        link: "/sports-wear-hommes"
                    },
                    {
                        sub: "Terrex",
                        link: "/terrex-hommes"
                    },
                    {
                        sub: "Y-3",
                        link: "/y-3-hommes"
                    },
                    {
                        sub: "Participons à mettre fin aux déchets plastiques",
                        link: "/participons-plastiques"
                    },
                ]
            },
            {
                subtitle: "Uniquement chez adidas",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/produits-hommes"
                    },
                    {
                        sub: "chaussures",
                        link: "/chassures-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-hommes"
                    },
                ]
            },
            {
                subtitle: "Nos produits Better Choices",
                subcategories: [
                    {
                        sub: "Fabriqué à partir de matières recyclées",
                        link: "/fabrique-recycle-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de matières vegan",
                        link: "/fabrique-vegan-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de coton bio",
                        link: "/fabrique-coton-hommes"
                    },
                    {
                        sub: "Nos produis Better Choices",
                        link: "/fabrique-hommes"
                    },
                ]
            },
            {
                subtitle: "À l'affiche",
                subcategories: [
                    {
                        sub: "Nouveautés",
                        link: "/nouveautes-hommes"
                    },
                    {
                        sub: "Tendances",
                        link: "/tendances-hommes"
                    },
                    {
                        sub: "Sorties sneakers",
                        link: "/sorties-sneakers-hommes"
                    },
                    {
                        sub: "Shop d'hiver",
                        link: "/shop-hiver-hommes"
                    },
                    {
                        sub: "Stan Smith",
                        link: "/stan-smith-hommes"
                    },
                    {
                        sub: "Sneakers noires",
                        link: "/sneakers-noires-hommes"
                    },
                    {
                        sub: "Vestes polaires",
                        link: "/vestes-polaires-hommes"
                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promo-hommes"
                    },
                ]
            },
            {
                subtitle: "Promos",
                subcategories: []
            }
        ]
    },
    {
        title: "COLLECTIONS",
        categories: [
            {
                subtitle: "chaussures collection",
                subcategories: [
                    {
                        sub: "Toutes les chaussures",
                        link: "/toutes-commandes-hommes"
                    },
                    {
                        sub: "Baskets",
                        link: "/baskets-hommes"
                    },
                    {
                        sub: "Running",
                        link: "/running-hommes"
                    },
                    {
                        sub: "Football",
                        link: "/football-hommes"

                    },
                    {
                        sub: "Randonnéé & Outdoor",
                        link: "/randonee-hommes"

                    },
                    {
                        sub: "Claquettes & Tongs",
                        link: "/claquette-hommes"

                    },
                    {
                        sub: "Fitness et training",
                        link: "/fitness-hommes"

                    },
                    {
                        sub: "Marche",
                        link: "/marche-hommes"

                    },
                    {
                        sub: "Basketball",
                        link: "/basketball-hommes"

                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"

                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promos-hommes"

                    },
                    {
                        sub: "Chaussures: jusqu'à -40%",
                        link: "/chaussures-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                subcategories: [
                    {
                        sub: "Toutes les vêtements",
                        link: "/vêtements-hommes"
                    },
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "T-shirts & Tops",
                        link: "/tops-hommes"
                    },
                    {
                        sub: "Joggings & bas de survêtement",
                        link: "/joggings-hommes"

                    },
                    {
                        sub: "Hoodies",
                        link: "/hoddies-hommes"

                    },
                    {
                        sub: "Sweat-shirts",
                        link: "/sweet-hommes"
                    },
                    {
                        sub: "Vestes",
                        link: "/vestes-hommes"
                    },
                    {
                        sub: "Pantalons",
                        link: "/pontalons-hommes"
                    },
                    {
                        sub: "Survêtements",
                        link: "/survetement-hommes"
                    },
                    {
                        sub: "Maillots de football",
                        link: "/maillot-football-hommes"
                    },
                    {
                        sub: "Shorts",
                        link: "/Shorts-hommes"
                    },
                    {
                        sub: "Maillots de bain",
                        link: "/maillots-bain-hommes"
                    },
                    {
                        sub: "Vêtements: jusqu'à -40%",
                        link: "/vetements-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Accessoires",
                subcategories: [
                    {
                        sub: "Toutes les accessoires",
                        link: "/accessoires-hommes"
                    },
                    {
                        sub: "Chaussettes",
                        link: "/chaussettes-hommes"
                    },
                    {
                        sub: "Accessoires tête",
                        link: "/accessoires-tete-hommes"
                    },
                    {
                        sub: "Sacs",
                        link: "/sacs-hommes"

                    },
                    {
                        sub: "Ballons",
                        link: "/ballons-hommes"

                    },
                    {
                        sub: "Sous-vêtements",
                        link: "/sous-vetements-hommes"
                    },
                    {
                        sub: "Accessoires hiver",
                        link: "/accessoires-hiver-hommes"
                    },
                    {
                        sub: "Accessoires: jusqu'à -40%",
                        link: "/accessoires-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Fêtes des célibataires : jusqu'à -40%",
                subcategories: [
                    {
                        sub: "Chaussures",
                        link: "/chaussures-celibataires-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vêtements-celibataires-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-celibataires-hommes"
                    },

                ]
            },
            {
                subtitle: "Coupe du Monde de la FIFA 2022™",
                subcategories: [
                    {
                        sub: "Collection Coupe du Monde de la FIFA™",
                        link: "/collection-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Tenues",
                        link: "/tenues-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Ballons de match",
                        link: "/ballons-coupe-du-monde-hommes"
                    },
                    {
                        sub: "TIRO",
                        link: "/tiro-coupe-du-monde-hommes"

                    },
                    {
                        sub: "Chaussures de football",
                        link: "/chassures-football-hommes"

                    },
                ]
            },
            {
                subtitle: "Nouvelle saison",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/tous-produits-hommes"
                    },
                    {
                        sub: "Chaussures",
                        link: "/chassures-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-nouvelles-saison-hommes"

                    },
                ]
            },
            {
                subtitle: "Sports",
                subcategories: [
                    {
                        sub: "Football",
                        link: "/fotball-hommes"
                    },
                    {
                        sub: "Training",
                        link: "/training-hommes"
                    },
                    {
                        sub: "Radonnée & Outdoor",
                        link: "/randonnee-hommes"
                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"
                    },
                    {
                        sub: "Tennis",
                        link: "/tennis-hommes"
                    },
                    {
                        sub: "Natations",
                        link: "/natations-hommes"
                    },
                    {
                        sub: "Autres sports",
                        link: "/autres-sports-hommes"
                    },
                ]
            },
            {
                subtitle: "Marques",
                subcategories: [
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "Sportswear",
                        link: "/sports-wear-hommes"
                    },
                    {
                        sub: "Terrex",
                        link: "/terrex-hommes"
                    },
                    {
                        sub: "Y-3",
                        link: "/y-3-hommes"
                    },
                    {
                        sub: "Participons à mettre fin aux déchets plastiques",
                        link: "/participons-plastiques"
                    },
                ]
            },
            {
                subtitle: "Uniquement chez adidas",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/produits-hommes"
                    },
                    {
                        sub: "chaussures",
                        link: "/chassures-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-hommes"
                    },
                ]
            },
            {
                subtitle: "Nos produits Better Choices",
                subcategories: [
                    {
                        sub: "Fabriqué à partir de matières recyclées",
                        link: "/fabrique-recycle-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de matières vegan",
                        link: "/fabrique-vegan-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de coton bio",
                        link: "/fabrique-coton-hommes"
                    },
                    {
                        sub: "Nos produis Better Choices",
                        link: "/fabrique-hommes"
                    },
                ]
            },
            {
                subtitle: "À l'affiche",
                subcategories: [
                    {
                        sub: "Nouveautés",
                        link: "/nouveautes-hommes"
                    },
                    {
                        sub: "Tendances",
                        link: "/tendances-hommes"
                    },
                    {
                        sub: "Sorties sneakers",
                        link: "/sorties-sneakers-hommes"
                    },
                    {
                        sub: "Shop d'hiver",
                        link: "/shop-hiver-hommes"
                    },
                    {
                        sub: "Stan Smith",
                        link: "/stan-smith-hommes"
                    },
                    {
                        sub: "Sneakers noires",
                        link: "/sneakers-noires-hommes"
                    },
                    {
                        sub: "Vestes polaires",
                        link: "/vestes-polaires-hommes"
                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promo-hommes"
                    },
                ]
            },
            {
                subtitle: "Promos",
                subcategories: []
            }
        ]
    },
    {
        title: "FÊTE DES CÉLIBATAIRES",
        categories: [
            {
                subtitle: "chaussures celibataire",
                subcategories: [
                    {
                        sub: "Toutes les chaussures",
                        link: "/toutes-commandes-hommes"
                    },
                    {
                        sub: "Baskets",
                        link: "/baskets-hommes"
                    },
                    {
                        sub: "Running",
                        link: "/running-hommes"
                    },
                    {
                        sub: "Football",
                        link: "/football-hommes"

                    },
                    {
                        sub: "Randonnéé & Outdoor",
                        link: "/randonee-hommes"

                    },
                    {
                        sub: "Claquettes & Tongs",
                        link: "/claquette-hommes"

                    },
                    {
                        sub: "Fitness et training",
                        link: "/fitness-hommes"

                    },
                    {
                        sub: "Marche",
                        link: "/marche-hommes"

                    },
                    {
                        sub: "Basketball",
                        link: "/basketball-hommes"

                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"

                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promos-hommes"

                    },
                    {
                        sub: "Chaussures: jusqu'à -40%",
                        link: "/chaussures-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                subcategories: [
                    {
                        sub: "Toutes les vêtements",
                        link: "/vêtements-hommes"
                    },
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "T-shirts & Tops",
                        link: "/tops-hommes"
                    },
                    {
                        sub: "Joggings & bas de survêtement",
                        link: "/joggings-hommes"

                    },
                    {
                        sub: "Hoodies",
                        link: "/hoddies-hommes"

                    },
                    {
                        sub: "Sweat-shirts",
                        link: "/sweet-hommes"
                    },
                    {
                        sub: "Vestes",
                        link: "/vestes-hommes"
                    },
                    {
                        sub: "Pantalons",
                        link: "/pontalons-hommes"
                    },
                    {
                        sub: "Survêtements",
                        link: "/survetement-hommes"
                    },
                    {
                        sub: "Maillots de football",
                        link: "/maillot-football-hommes"
                    },
                    {
                        sub: "Shorts",
                        link: "/Shorts-hommes"
                    },
                    {
                        sub: "Maillots de bain",
                        link: "/maillots-bain-hommes"
                    },
                    {
                        sub: "Vêtements: jusqu'à -40%",
                        link: "/vetements-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Accessoires",
                subcategories: [
                    {
                        sub: "Toutes les accessoires",
                        link: "/accessoires-hommes"
                    },
                    {
                        sub: "Chaussettes",
                        link: "/chaussettes-hommes"
                    },
                    {
                        sub: "Accessoires tête",
                        link: "/accessoires-tete-hommes"
                    },
                    {
                        sub: "Sacs",
                        link: "/sacs-hommes"

                    },
                    {
                        sub: "Ballons",
                        link: "/ballons-hommes"

                    },
                    {
                        sub: "Sous-vêtements",
                        link: "/sous-vetements-hommes"
                    },
                    {
                        sub: "Accessoires hiver",
                        link: "/accessoires-hiver-hommes"
                    },
                    {
                        sub: "Accessoires: jusqu'à -40%",
                        link: "/accessoires-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Fêtes des célibataires : jusqu'à -40%",
                subcategories: [
                    {
                        sub: "Chaussures",
                        link: "/chaussures-celibataires-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vêtements-celibataires-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-celibataires-hommes"
                    },

                ]
            },
            {
                subtitle: "Coupe du Monde de la FIFA 2022™",
                subcategories: [
                    {
                        sub: "Collection Coupe du Monde de la FIFA™",
                        link: "/collection-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Tenues",
                        link: "/tenues-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Ballons de match",
                        link: "/ballons-coupe-du-monde-hommes"
                    },
                    {
                        sub: "TIRO",
                        link: "/tiro-coupe-du-monde-hommes"

                    },
                    {
                        sub: "Chaussures de football",
                        link: "/chassures-football-hommes"

                    },
                ]
            },
            {
                subtitle: "Nouvelle saison",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/tous-produits-hommes"
                    },
                    {
                        sub: "Chaussures",
                        link: "/chassures-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-nouvelles-saison-hommes"

                    },
                ]
            },
            {
                subtitle: "Sports",
                subcategories: [
                    {
                        sub: "Football",
                        link: "/fotball-hommes"
                    },
                    {
                        sub: "Training",
                        link: "/training-hommes"
                    },
                    {
                        sub: "Radonnée & Outdoor",
                        link: "/randonnee-hommes"
                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"
                    },
                    {
                        sub: "Tennis",
                        link: "/tennis-hommes"
                    },
                    {
                        sub: "Natations",
                        link: "/natations-hommes"
                    },
                    {
                        sub: "Autres sports",
                        link: "/autres-sports-hommes"
                    },
                ]
            },
            {
                subtitle: "Marques",
                subcategories: [
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "Sportswear",
                        link: "/sports-wear-hommes"
                    },
                    {
                        sub: "Terrex",
                        link: "/terrex-hommes"
                    },
                    {
                        sub: "Y-3",
                        link: "/y-3-hommes"
                    },
                    {
                        sub: "Participons à mettre fin aux déchets plastiques",
                        link: "/participons-plastiques"
                    },
                ]
            },
            {
                subtitle: "Uniquement chez adidas",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/produits-hommes"
                    },
                    {
                        sub: "chaussures",
                        link: "/chassures-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-hommes"
                    },
                ]
            },
            {
                subtitle: "Nos produits Better Choices",
                subcategories: [
                    {
                        sub: "Fabriqué à partir de matières recyclées",
                        link: "/fabrique-recycle-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de matières vegan",
                        link: "/fabrique-vegan-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de coton bio",
                        link: "/fabrique-coton-hommes"
                    },
                    {
                        sub: "Nos produis Better Choices",
                        link: "/fabrique-hommes"
                    },
                ]
            },
            {
                subtitle: "À l'affiche",
                subcategories: [
                    {
                        sub: "Nouveautés",
                        link: "/nouveautes-hommes"
                    },
                    {
                        sub: "Tendances",
                        link: "/tendances-hommes"
                    },
                    {
                        sub: "Sorties sneakers",
                        link: "/sorties-sneakers-hommes"
                    },
                    {
                        sub: "Shop d'hiver",
                        link: "/shop-hiver-hommes"
                    },
                    {
                        sub: "Stan Smith",
                        link: "/stan-smith-hommes"
                    },
                    {
                        sub: "Sneakers noires",
                        link: "/sneakers-noires-hommes"
                    },
                    {
                        sub: "Vestes polaires",
                        link: "/vestes-polaires-hommes"
                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promo-hommes"
                    },
                ]
            },
            {
                subtitle: "Promos",
                subcategories: []
            }
        ]
    },
    {
        title: "PROMOS",
        categories: [
            {
                subtitle: "chaussures promos",
                subcategories: [
                    {
                        sub: "Toutes les chaussures",
                        link: "/toutes-commandes-hommes"
                    },
                    {
                        sub: "Baskets",
                        link: "/baskets-hommes"
                    },
                    {
                        sub: "Running",
                        link: "/running-hommes"
                    },
                    {
                        sub: "Football",
                        link: "/football-hommes"

                    },
                    {
                        sub: "Randonnéé & Outdoor",
                        link: "/randonee-hommes"

                    },
                    {
                        sub: "Claquettes & Tongs",
                        link: "/claquette-hommes"

                    },
                    {
                        sub: "Fitness et training",
                        link: "/fitness-hommes"

                    },
                    {
                        sub: "Marche",
                        link: "/marche-hommes"

                    },
                    {
                        sub: "Basketball",
                        link: "/basketball-hommes"

                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"

                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promos-hommes"

                    },
                    {
                        sub: "Chaussures: jusqu'à -40%",
                        link: "/chaussures-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                subcategories: [
                    {
                        sub: "Toutes les vêtements",
                        link: "/vêtements-hommes"
                    },
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "T-shirts & Tops",
                        link: "/tops-hommes"
                    },
                    {
                        sub: "Joggings & bas de survêtement",
                        link: "/joggings-hommes"

                    },
                    {
                        sub: "Hoodies",
                        link: "/hoddies-hommes"

                    },
                    {
                        sub: "Sweat-shirts",
                        link: "/sweet-hommes"
                    },
                    {
                        sub: "Vestes",
                        link: "/vestes-hommes"
                    },
                    {
                        sub: "Pantalons",
                        link: "/pontalons-hommes"
                    },
                    {
                        sub: "Survêtements",
                        link: "/survetement-hommes"
                    },
                    {
                        sub: "Maillots de football",
                        link: "/maillot-football-hommes"
                    },
                    {
                        sub: "Shorts",
                        link: "/Shorts-hommes"
                    },
                    {
                        sub: "Maillots de bain",
                        link: "/maillots-bain-hommes"
                    },
                    {
                        sub: "Vêtements: jusqu'à -40%",
                        link: "/vetements-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Accessoires",
                subcategories: [
                    {
                        sub: "Toutes les accessoires",
                        link: "/accessoires-hommes"
                    },
                    {
                        sub: "Chaussettes",
                        link: "/chaussettes-hommes"
                    },
                    {
                        sub: "Accessoires tête",
                        link: "/accessoires-tete-hommes"
                    },
                    {
                        sub: "Sacs",
                        link: "/sacs-hommes"

                    },
                    {
                        sub: "Ballons",
                        link: "/ballons-hommes"

                    },
                    {
                        sub: "Sous-vêtements",
                        link: "/sous-vetements-hommes"
                    },
                    {
                        sub: "Accessoires hiver",
                        link: "/accessoires-hiver-hommes"
                    },
                    {
                        sub: "Accessoires: jusqu'à -40%",
                        link: "/accessoires-super-promos-hommes"
                    },
                ]
            },
            {
                subtitle: "Fêtes des célibataires : jusqu'à -40%",
                subcategories: [
                    {
                        sub: "Chaussures",
                        link: "/chaussures-celibataires-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vêtements-celibataires-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-celibataires-hommes"
                    },

                ]
            },
            {
                subtitle: "Coupe du Monde de la FIFA 2022™",
                subcategories: [
                    {
                        sub: "Collection Coupe du Monde de la FIFA™",
                        link: "/collection-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Tenues",
                        link: "/tenues-coupe-du-monde-hommes"
                    },
                    {
                        sub: "Ballons de match",
                        link: "/ballons-coupe-du-monde-hommes"
                    },
                    {
                        sub: "TIRO",
                        link: "/tiro-coupe-du-monde-hommes"

                    },
                    {
                        sub: "Chaussures de football",
                        link: "/chassures-football-hommes"

                    },
                ]
            },
            {
                subtitle: "Nouvelle saison",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/tous-produits-hommes"
                    },
                    {
                        sub: "Chaussures",
                        link: "/chassures-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-nouvelle-saison-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-nouvelles-saison-hommes"

                    },
                ]
            },
            {
                subtitle: "Sports",
                subcategories: [
                    {
                        sub: "Football",
                        link: "/fotball-hommes"
                    },
                    {
                        sub: "Training",
                        link: "/training-hommes"
                    },
                    {
                        sub: "Radonnée & Outdoor",
                        link: "/randonnee-hommes"
                    },
                    {
                        sub: "Golf",
                        link: "/golf-hommes"
                    },
                    {
                        sub: "Tennis",
                        link: "/tennis-hommes"
                    },
                    {
                        sub: "Natations",
                        link: "/natations-hommes"
                    },
                    {
                        sub: "Autres sports",
                        link: "/autres-sports-hommes"
                    },
                ]
            },
            {
                subtitle: "Marques",
                subcategories: [
                    {
                        sub: "Originals",
                        link: "/originals-hommes"
                    },
                    {
                        sub: "Sportswear",
                        link: "/sports-wear-hommes"
                    },
                    {
                        sub: "Terrex",
                        link: "/terrex-hommes"
                    },
                    {
                        sub: "Y-3",
                        link: "/y-3-hommes"
                    },
                    {
                        sub: "Participons à mettre fin aux déchets plastiques",
                        link: "/participons-plastiques"
                    },
                ]
            },
            {
                subtitle: "Uniquement chez adidas",
                subcategories: [
                    {
                        sub: "Tous les produits Hommes",
                        link: "/produits-hommes"
                    },
                    {
                        sub: "chaussures",
                        link: "/chassures-hommes"
                    },
                    {
                        sub: "Vêtements",
                        link: "/vetements-hommes"
                    },
                    {
                        sub: "Accessoires",
                        link: "/accessoires-hommes"
                    },
                ]
            },
            {
                subtitle: "Nos produits Better Choices",
                subcategories: [
                    {
                        sub: "Fabriqué à partir de matières recyclées",
                        link: "/fabrique-recycle-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de matières vegan",
                        link: "/fabrique-vegan-hommes"
                    },
                    {
                        sub: "Fabriqué à partir de coton bio",
                        link: "/fabrique-coton-hommes"
                    },
                    {
                        sub: "Nos produis Better Choices",
                        link: "/fabrique-hommes"
                    },
                ]
            },
            {
                subtitle: "À l'affiche",
                subcategories: [
                    {
                        sub: "Nouveautés",
                        link: "/nouveautes-hommes"
                    },
                    {
                        sub: "Tendances",
                        link: "/tendances-hommes"
                    },
                    {
                        sub: "Sorties sneakers",
                        link: "/sorties-sneakers-hommes"
                    },
                    {
                        sub: "Shop d'hiver",
                        link: "/shop-hiver-hommes"
                    },
                    {
                        sub: "Stan Smith",
                        link: "/stan-smith-hommes"
                    },
                    {
                        sub: "Sneakers noires",
                        link: "/sneakers-noires-hommes"
                    },
                    {
                        sub: "Vestes polaires",
                        link: "/vestes-polaires-hommes"
                    },
                    {
                        sub: "Chaussures à moins de 65 €",
                        link: "/chaussures-promo-hommes"
                    },
                ]
            },
            {
                subtitle: "Promos",
                subcategories: []
            }
        ]
    },
]


const listTwo = [
    {
        title: "Suivi De Commande",
        link: "/suivis-commandes"
    },
    {
        title: "Mon profil",
        link: "/profil"
    },
    {
        title: "Cartes cadeau",
        link: "/cartes-cadeau"
    },
    {
        title: "Trouver un magasin",
        link: "/trouver-magazin"
    },
    {
        title: "Aide et Service Client",
        link: "/services-clients"
    },
    {
        title: "échanges et retours",
        link: "/echange-retour"
    },
    {
        title: "inscription newsletter",
        link: "/inscription-newsletter"
    },

]

const listThree = [
    {
        title: "aide",
        link: "/services-clients"
    },
    {
        title: "échanges & retours",
        link: "/echange-retour"
    },

    {
        title: "statut de la commande",
        link: "/statut-commande"
    },
    {
        title: "cartes cadeau",
        link: "/cartes-cadeau"
    },
    {
        title: "deviens membre",
        link: "/"
    }

]


const dataDesktop = [
    {
        title: "HOMMES",
        list: [
            {
                subtitle: "à l'affiche",
                items: [
                    {
                        item: "Coupe du Monde de la FIFA 2022",
                        link: "/aide"
                    },
                    {
                        img: imgNavbar,
                        link: ""
                    },
                    {
                        item: "Nouvelle saison",
                        link: ""
                    },
                    {
                        item: "Sorties sneakers",
                        link: ""
                    },
                    {
                        item: "Uniquement chez adidas",
                        link: ""
                    },
                    {
                        item: "Tendance",
                        link: ""
                    },
                    {
                        item: "Promos",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "chaussures",
                items: [
                    {
                        item: "Baskets",
                        link: ""
                    },
                    {
                        item: "Running",
                        link: ""
                    },
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Randonnée & Outdoor",
                        link: ""
                    },
                    {
                        item: "Claquettes & Tongs",
                        link: ""
                    },
                    {
                        item: "Fitness et Training",
                        link: ""
                    },
                    {
                        item: "Marche",
                        link: ""
                    },
                    {
                        item: "Basketball",
                        link: ""
                    },
                    {
                        item: "Golf",
                        link: ""
                    },
                    {
                        item: "Chaussures à moins de 65€",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                items: [
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "T-shirt & Tops ",
                        link: ""
                    },
                    {
                        item: "Jogging & bas de survêtement",
                        link: ""
                    },
                    {
                        item: "Hoodies",
                        link: ""
                    },
                    {
                        item: "Sweat-shirts",
                        link: ""
                    },
                    {
                        item: "Vestes",
                        link: ""
                    },
                    {
                        item: "Pantalons",
                        link: ""
                    },
                    {
                        item: "Survêtements",
                        link: ""
                    },
                    {
                        item: "Maillots de football",
                        link: ""
                    },
                    {
                        item: "Shorts",
                        link: ""
                    },
                    {
                        item: "Maillots de bain",
                        link: ""
                    },
                    {
                        item: "Vestes à moins de 120 €",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "accessoires",
                items: [
                    {
                        item: "Chaussetes",
                        link: ""
                    },
                    {
                        item: "Accessoires tête",
                        link: ""
                    },
                    {
                        item: "Sacs",
                        link: ""
                    },
                    {
                        item: "Ballons",
                        link: ""
                    },
                    {
                        item: "Sous-vêtemenets",
                        link: ""
                    },
                    {
                        item: "Accessoires hiver",
                        link: ""
                    },
                    {
                        item: "Cadeaux",
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour les runners",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour les footballeurs",
                        link: ""
                    },
                    {
                        item: "Cadeaux de Noël",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour tous",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "sports",
                items: [
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Running",
                        link: ""
                    },
                    {
                        item: "Fitness et Training",
                        link: ""
                    },
                    {
                        item: "Sport d'hiver",
                        link: ""
                    },
                    {
                        item: "Radonnée & outdoor",
                        link: ""
                    },
                    {
                        item: "Golf",
                        link: ""
                    },
                    {
                        item: "Tennis",
                        link: ""
                    },
                    {
                        item: "Natation",
                        link: ""
                    },
                    {
                        item: "Marques",
                        link: ""
                    },
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "Sportswear",
                        link: ""
                    },
                    {
                        item: "Terrex",
                        link: ""
                    },
                    {
                        item: "Y-3",
                        link: ""
                    },
                    {
                        item: "Participons à mettre fin aux déchets plastiques",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "coupe du monde de la fifa 2022™",
                items: [
                    {
                        item: "Collection coupe du monde de la FIFA™",
                        link: ""
                    },
                    {
                        item: "Tenues",
                        link: ""
                    },
                    {
                        item: "Ballons de match",
                        link: ""
                    },
                    {
                        item: "TIRO",
                        link: ""
                    },
                    {
                        item: "Chaussures de football",
                        link: ""
                    },
                ]
            },
        ],
        listFooter: [
            {
                item: "Tous les produits",
                link: ""
            },
            {
                item: "Toutes les chaussures",
                link: ""
            },
            {
                item: "Toutes les vétements",
                link: ""
            },
            {
                item: "Toutes les accessoires",
                link: ""
            },
            {
                item: "Autres sports",
                link: ""
            },

        ]

    },
    {
        title: "FEMMES",
        list: [
            {
                subtitle: "à l'affiche",
                items: [
                    {
                        item: "Coupe du Monde de la FIFA 2022",
                        link: "/aide"
                    },
                    {
                        img: imgNavbar,
                        link: ""
                    },
                    {
                        item: "Nouvelle saison",
                        link: ""
                    },
                    {
                        item: "Sorties sneakers",
                        link: ""
                    },
                    {
                        item: "Uniquement chez adidas",
                        link: ""
                    },
                    {
                        item: "Tendance",
                        link: ""
                    },
                    {
                        item: "Promos",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "chaussures",
                items: [
                    {
                        item: "Baskets",
                        link: ""
                    },
                    {
                        item: "Running",
                        link: ""
                    },
                    {
                        item: "Randonnée & Outdoor",
                        link: ""
                    },
                    {
                        item: "Marche",
                        link: ""
                    },
                    {
                        item: "Fitness et Training",
                        link: ""
                    },
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Golf",
                        link: ""
                    },
                    {
                        item: "Chaussures à moins de 65€",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                items: [
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "T-shirt & Tops ",
                        link: ""
                    },
                    {
                        item: "Leggings",
                        link: ""
                    },
                    {
                        item: "Hoodies",
                        link: ""
                    },
                    {
                        item: "Sweat-shirts",
                        link: ""
                    },
                    {
                        item: "Jogging & bas de survêtement",
                        link: ""
                    },
                    {
                        item: "Vestes",
                        link: ""
                    },
                    {
                        item: "Brassières de sport",
                        link: ""
                    },
                    {
                        item: "Pantalons",
                        link: ""
                    },
                    {
                        item: "Survêtement",
                        link: ""
                    },
                    {
                        item: "Maillots de football",
                        link: ""
                    },
                    {
                        item: "Shorts",
                        link: ""
                    },
                    {
                        item: "Jupes et robes",
                        link: ""
                    },
                    {
                        item: "Maillots de bain",
                        link: ""
                    },
                    {
                        item: "Grandes tailles",
                        link: ""
                    },
                    {
                        item: "Vestes à moins de 120 €",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "accessoires",
                items: [
                    {
                        item: "Chaussetes",
                        link: ""
                    },
                    {
                        item: "Sacs",
                        link: ""
                    },
                    {
                        item: "Accessoires tête",
                        link: ""
                    },
                    {
                        item: "Ballons",
                        link: ""
                    },
                    {
                        item: "Sous-vêtemenets",
                        link: ""
                    },
                    {
                        item: "Accessoires hiver",
                        link: ""
                    },
                    {
                        item: "Cadeaux",
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour les runners",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour les footballeurs",
                        link: ""
                    },
                    {
                        item: "Cadeaux de Noël",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour tous",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "sports",
                items: [
                    {
                        item: "Running",
                        link: ""
                    },
                    {
                        item: "Fitness et Training",
                        link: ""
                    },
                    {
                        item: "Golf",
                        link: ""
                    },
                    {
                        item: "Tennis",
                        link: ""
                    },
                    {
                        item: "Sport d'hiver",
                        link: ""
                    },
                    {
                        item: "Randonnée et Outdoor",
                        link: ""
                    },
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Natation",
                        link: ""
                    },
                    {
                        item: "Yoga",
                        link: ""
                    },
                    {
                        item: "Marques",
                        link: ""
                    },
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "Sportswear",
                        link: ""
                    },
                    {
                        item: "Terrex",
                        link: ""
                    },
                    {
                        item: "Y-3",
                        link: ""
                    },
                    {
                        item: "Stella McCartney",
                        link: ""
                    },
                    {
                        item: "Participons à mettre fin aux déchets plastiques",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "coupe du monde de la fifa 2022™",
                items: [
                    {
                        item: "Collection coupe du monde de la FIFA™",
                        link: ""
                    },
                    {
                        item: "Tenues",
                        link: ""
                    },
                    {
                        item: "Ballons de match",
                        link: ""
                    },
                    {
                        item: "TIRO",
                        link: ""
                    },
                    {
                        item: "Chaussures de football",
                        link: ""
                    },
                ]
            },
        ],
        listFooter: [
            {
                item: "Tous les produits",
                link: ""
            },
            {
                item: "Toutes les chaussures",
                link: ""
            },
            {
                item: "Toutes les vêtements",
                link: ""
            },
            {
                item: "Toutes les accessoires",
                link: ""
            },
            {
                item: "Autres sports",
                link: ""
            },

        ]

    },
    {
        title: "ENFANTS",
        list: [
            {
                subtitle: "à l'affiche",
                items: [
                    {
                        item: "Coupe du Monde de la FIFA 2022",
                        link: "/aide"
                    },
                    {
                        img: imgNavbar,
                        link: ""
                    },
                    {
                        item: "Nouvelle saison",
                        link: ""
                    },
                    {
                        item: "Sorties sneakers",
                        link: ""
                    },
                    {
                        item: "Uniquement chez adidas",
                        link: ""
                    },
                    {
                        item: "Tendance",
                        link: ""
                    },
                    {
                        item: "Promos",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "chaussures garçons",
                items: [
                    {
                        item: "Sneakers",
                        link: ""
                    },
                    {
                        item: "Claquettes & sandales",
                        link: ""
                    },
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Training",
                        link: ""
                    },
                    {
                        item: "Outdoor",
                        link: ""
                    },
                    {
                        item: "Chausseres filles",
                        link: ""
                    },
                    {
                        item: "Sneakers",
                        link: ""
                    },
                    {
                        item: "Claquettes & sandales",
                        link: ""
                    },
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Training",
                        link: ""
                    },
                    {
                        item: "Outdoor",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Vêtements garçons",
                items: [
                    {
                        item: "Survêtement",
                        link: ""
                    },
                    {
                        item: "Ensembles complets",
                        link: ""
                    },
                    {
                        item: "T-shirts",
                        link: ""
                    },
                    {
                        item: "Shorts",
                        link: ""
                    },
                    {
                        item: "Pantalons",
                        link: ""
                    },
                    {
                        item: "Hoodies",
                        link: ""
                    },
                    {
                        item: "Sweat-shirts",
                        link: ""
                    },
                    {
                        item: "Vestes",
                        link: ""
                    },
                    {
                        item: "Maillots de football",
                        link: ""
                    },
                    {
                        item: "Vêtemenets filles",
                        link: ""
                    },
                    {
                        item: "Survêtement",
                        link: ""
                    },
                    {
                        item: "Ensembles complets",
                        link: ""
                    },
                    {
                        item: "T-shirts",
                        link: ""
                    },
                    {
                        item: "Shorts",
                        link: ""
                    },
                    {
                        item: "Pantalons",
                        link: ""
                    },
                    {
                        item: "Hoodies",
                        link: ""
                    },
                    {
                        item: "Sweat-shirts",
                        link: ""
                    },
                    {
                        item: "Vestes",
                        link: ""
                    },
                    {
                        item: "Maillots de football",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Acheter par taille de chaussures",
                items: [
                    {
                        item: "Bébés et bambins (pointure : 16-27)",
                        link: ""
                    },
                    {
                        item: "Enfants (pointure : 28-35)",
                        link: ""
                    },
                    {
                        item: "Adolescents (pointure : 35-40)",
                        link: ""
                    },
                    {
                        item: "Acheter par taille de vêtement",
                        link: ""
                    },
                    {
                        item: "Bébés et bambins (0-3M - 3-4A)",
                        link: ""
                    },
                    {
                        item: "Enfants (4-5A - 7-8A)",
                        link: ""
                    },
                    {
                        item: "Adolescents (8-9A - 15-16A)",
                        link: ""
                    },
                    {
                        item: "Cadeaux",
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour les footballeurs",
                        link: ""
                    },
                    {
                        item: "Cadeaux de Noël",
                        link: ""
                    },
                    {
                        item: "Cadeaux pour tous",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Accessoires",
                items: [
                    {
                        item: "Sacs à dos",
                        link: ""
                    },
                    {
                        item: "Chaussettes",
                        link: ""
                    },
                    {
                        item: "Accessoires tête",
                        link: ""
                    },
                    {
                        item: "Coupe Du Monde de la fifa 2022™",
                        link: ""
                    },
                    {
                        item: "Collection Coupe du Monde de la FIFA™",
                        link: ""
                    },
                    {
                        item: "Tenues",
                        link: ""
                    },
                    {
                        item: "Ballons de match",
                        link: ""
                    },
                    {
                        item: "TIRO",
                        link: ""
                    },
                    {
                        item: "Chaussures de football",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Collections",
                items: [
                    {
                        item: "Disney",
                        link: ""
                    },
                    {
                        item: "LEGO",
                        link: ""
                    },
                    {
                        item: "Black panther",
                        link: ""
                    },
                    {
                        item: "Adicolor",
                        link: ""
                    },
                    {
                        item: "Mini me",
                        link: ""
                    },
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Outdoor",
                        link: ""
                    },
                    {
                        item: "Stan Smith",
                        link: ""
                    },
                    {
                        item: "Superstar",
                        link: ""
                    },
                ]
            },
        ],
        listFooter: [
            {
                item: "Tous les produits",
                link: ""
            },
            {
                item: "Toutes les chaussures",
                link: ""
            },
            {
                item: "Toutes les vétements",
                link: ""
            },
            {
                item: "Toutes les accessoires",
                link: ""
            },
            {
                item: "Autres sports",
                link: ""
            },

        ]

    },
    {
        title: "NOUVEAUTÉ",
        list: [
            {
                subtitle: "Nouveautés hommes",
                items: [
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Nouveautés femmes",
                items: [
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Nouveautés enfants",
                items: [
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "acheter par sport",
                items: [
                    {
                        item: "Football",
                        link: ""
                    },
                    {
                        item: "Running",
                        link: ""
                    },
                    {
                        item: "Training",
                        link: ""
                    },
                    {
                        item: "Randonnée & outdoor",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Acheter par marques",
                items: [
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "Sportwear",
                        link: ""
                    },
                    {
                        item: "Terrex",
                        link: ""
                    },
                    {
                        item: "Y-3",
                        link: ""
                    },
                    {
                        item: "Helps End Plastic Wastle",
                        link: ""
                    },
                ]
            },
        ],
        listFooter: [
            {
                item: "Toutes les nouveautés hommes",
                link: ""
            },
            {
                item: "Toutes les nouveautés femmes",
                link: ""
            },
            {
                item: "Toutes les nouveautés enfants",
                link: ""
            },
        ]

    },
    {
        title: "SPORTS",
        list: [
            {
                subtitle: "Football",
                items: [
                    {
                        img: imgNavbar,
                        link: ""
                    },
                    {
                        item: "COUPE DU MONDE DE LA FIFA 2022",
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Clubs",
                        link: ""
                    },
                    {
                        item: "Équipes nationales",
                        link: ""
                    },
                    {
                        item: "Tous les texttille",
                        link: ""
                    },
                    {
                        item: "Predator",
                        link: ""
                    },
                    {
                        item: "X",
                        link: ""
                    },
                    {
                        item: "Copa",
                        link: ""
                    },
                    {
                        item: "Pack Al Rihla",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Running",
                items: [
                    {
                        img: runningNav,
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accesoires",
                        link: ""
                    },
                    {
                        item: "Chaussures de running casual Pour débutants",
                        link: ""
                    },
                    {
                        item: "Course & préparation de course",
                        link: ""
                    },
                    {
                        item: "Chaussures de running pour les longues distances",
                        link: ""
                    },
                    {
                        item: "Trouve ta Chaussure de running",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Outdoor",
                items: [
                    {
                        img: outdoorNav,
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accesoires",
                        link: ""
                    },
                    {
                        item: "Ski",
                        link: ""
                    },
                    {
                        item: "Snowboard",
                        link: ""
                    },
                    {
                        item: "Sports d'hiver",
                        link: ""
                    },
                    {
                        item: "Randonnée",
                        link: ""
                    },
                    {
                        item: "Trail running",
                        link: ""
                    },
                    {
                        item: "VTT",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Fitness et Training",
                items: [
                    {
                        img: FitnessNav,
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accesoires",
                        link: ""
                    },
                    {
                        item: "HIIT",
                        link: ""
                    },
                    {
                        item: "Renforcement musculaire",
                        link: ""
                    },
                    {
                        item: "Yoga & Studio",
                        link: ""
                    },
                    {
                        item: "TECHFIT",
                        link: ""
                    },
                    {
                        item: "Trouve ta Brassiere de Sport",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Golf",
                items: [
                    {
                        img: golfNav,
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accesoires",
                        link: ""
                    },
                    {
                        item: "adicross",
                        link: ""
                    },
                    {
                        item: "Codechaos",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Autres sports",
                items: [
                    {
                        item: "Sport d'hiver",
                        link: ""
                    },
                    {
                        item: "Tennis",
                        link: ""
                    },
                    {
                        item: "Natation",
                        link: ""
                    },
                    {
                        item: "Cyclisme",
                        link: ""
                    },
                    {
                        item: "Basketball",
                        link: ""
                    },
                    {
                        item: "Rugby",
                        link: ""
                    },
                    {
                        item: "Skateboarding",
                        link: ""
                    },
                    {
                        item: "Haltérophilie",
                        link: ""
                    },
                    {
                        item: "Hockey sur gazon",
                        link: ""
                    },
                    {
                        item: "Boxe",
                        link: ""
                    },
                    {
                        item: "Handball",
                        link: ""
                    },
                    {
                        item: "Yoga",
                        link: ""
                    },
                    {
                        item: "Padel Tennis",
                        link: ""
                    },
                    {
                        item: "Volley-ball",
                        link: ""
                    },
                ]
            },
        ],
        listFooter: [
            {
                item: "Tous les produits football",
                link: ""
            },
            {
                item: "Tous les produits running",
                link: ""
            },
            {
                item: "Tous les produits Outdoor",
                link: ""
            },
            {
                item: "Tous les produits sport et training",
                link: ""
            },
            {
                item: "Tous les produits golf",
                link: ""
            },

        ]

    },
    {
        title: "COLLECTIONS",
        list: [
            {
                subtitle: "Tendances",
                items: [
                    {
                        img: tendanceNav,
                        link: ""
                    },
                    {
                        item: "Blog adidas",
                        link: ""
                    },
                    {
                        item: "Pantalons Cargo",
                        link: ""
                    },
                    {
                        item: "Hoodies",
                        link: ""
                    },
                    {
                        item: "Survêtements",
                        link: ""
                    },
                    {
                        item: "Sous-couches",
                        link: ""
                    },
                    {
                        item: "Vestes imperméables",
                        link: ""
                    },
                    {
                        item: "Doudounes",
                        link: ""
                    },
                    {
                        item: "Vestes sans manches",
                        link: ""
                    },
                    {
                        item: "Baskets noires",
                        link: ""
                    },
                    {
                        item: "Gants",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Running",
                items: [
                    {
                        img: runningNav2,
                        link: ""
                    },
                    {
                        item: "Baskets de Running",
                        link: ""
                    },
                    {
                        item: "Ultraboost",
                        link: ""
                    },
                    {
                        item: "Adizero",
                        link: ""
                    },
                    {
                        item: "Adizero",
                        link: ""
                    },
                    {
                        item: "4DFWD",
                        link: ""
                    },
                    {
                        item: "Chaussures de trail running",
                        link: ""
                    },
                    {
                        item: "Running T-shirts",
                        link: ""
                    },
                    {
                        item: "Short de Running",
                        link: ""
                    },
                    {
                        item: "Legging de Running",
                        link: ""
                    },
                    {
                        item: "Veste de Running",
                        link: ""
                    },
                    {
                        item: "Running Chaussettes",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Football",
                items: [
                    {
                        img: footballNav,
                        link: ""
                    },
                    {
                        item: "Chaussure de football pour terrain souple",
                        link: ""
                    },
                    {
                        item: "Chaussure de Foot terrain Souple",
                        link: ""
                    },
                    {
                        item: "Chaussure de football en salle",
                        link: ""
                    },
                    {
                        item: "Shorts de Foot",
                        link: ""
                    },
                    {
                        item: "Protège-tibias football",
                        link: ""
                    },
                    {
                        item: "Football Chaussetes",
                        link: ""
                    },
                    {
                        item: "Tenues Arsenal",
                        link: ""
                    },
                    {
                        item: "Tenues de Manchester United",
                        link: ""
                    },
                    {
                        item: "Collection Lionel Messi",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Vêtements",
                items: [
                    {
                        img: vetementNav,
                        link: ""
                    },
                    {
                        item: "Sweat-shirts",
                        link: ""
                    },
                    {
                        item: "Sweat à capuche",
                        link: ""
                    },
                    {
                        item: "Survêtements",
                        link: ""
                    },
                    {
                        item: "Vestes de Survêtements",
                        link: ""
                    },
                    {
                        item: "Bas de Survêtements",
                        link: ""
                    },
                    {
                        item: "Shirts & hauts",
                        link: ""
                    },
                    {
                        item: "Legging de sport",
                        link: ""
                    },
                    {
                        item: "Débardeurs",
                        link: ""
                    },
                    {
                        item: "Maternité",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Outdoor",
                items: [
                    {
                        img: outdoorNav,
                        link: ""
                    },
                    {
                        item: "Terrex Agravic",
                        link: ""
                    },
                    {
                        item: "Terrex Free Hiker",
                        link: ""
                    },
                    {
                        item: "Terrex AX",
                        link: ""
                    },
                    {
                        item: "Terrex Swift",
                        link: ""
                    },
                    {
                        item: "Terrex Skychaser",
                        link: ""
                    },
                    {
                        item: "Terrex Ten Sleuth",
                        link: ""
                    },
                    {
                        item: "Terrex Waterproof",
                        link: ""
                    },
                    {
                        item: "Priduits Terrex Better Choices",
                        link: ""
                    },
                    {
                        item: "MYSHELTER",
                        link: ""
                    },
                    {
                        item: "XPLORIC",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "UNIQUEMENT CHEZ ADIDAS",
                items: [
                    {
                        img: uniquementNav,
                        link: ""
                    },
                    {
                        item: "Exclusivités membres",
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Vêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                    {
                        item: "Exclusivités Hommes",
                        link: ""
                    },
                    {
                        item: "Exclusivités Femmes",
                        link: ""
                    },
                    {
                        item: "Exclusivités Enfants",
                        link: ""
                    },
                    {
                        item: "Exclusivités Originals",
                        link: ""
                    },
                    {
                        item: "Exclusivités Sportwear",
                        link: ""
                    },
                    {
                        item: "Exclusivités Performances",
                        link: ""
                    },
                ]
            },
        ],
    },
    {
        title: "PROMOS",
        list: [
            {
                subtitle: "Hommes",
                items: [
                    {
                        item: "Tous les produits Hommes",
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Hoodies & sweat-shirts",
                        link: ""
                    },
                    {
                        item: "Vestes",
                        link: ""
                    },
                    {
                        item: "Jogging & bas de survetement",
                        link: ""
                    },
                    {
                        item: "T-Shirts & Tops",
                        link: ""
                    },
                    {
                        item: "Survêtements",
                        link: ""
                    },
                    {
                        item: "Sandales & Tongs",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                    {
                        item: "Sacs et sacs à dos",
                        link: ""
                    },
                    {
                        item: "Shorts",
                        link: ""
                    },
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "Dernières tailles",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Femmes",
                items: [
                    {
                        item: "Tous les produits Femmes",
                        link: ""
                    },
                    {
                        item: "Chaussures",
                        link: ""
                    },
                    {
                        item: "Sweat-shirts & Sweat à capuche",
                        link: ""
                    },
                    {
                        item: "Vestes",
                        link: ""
                    },
                    {
                        item: "Jogging & bas de survetement",
                        link: ""
                    },
                    {
                        item: "T-Shirts & Tops",
                        link: ""
                    },
                    {
                        item: "Collants & Leggings",
                        link: ""
                    },
                    {
                        item: "Survêtements",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                    {
                        item: "Claquettes et Tongs",
                        link: ""
                    },
                    {
                        item: "Sacs et sacs à dos",
                        link: ""
                    },
                    {
                        item: "Jupes et robes",
                        link: ""
                    },
                    {
                        item: "Shorts",
                        link: ""
                    },
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "Dernières tailles",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Enfants",
                items: [
                    {
                        item: "Tous les produits Enfants",
                        link: ""
                    },
                    {
                        item: "Chaussures enfants",
                        link: ""
                    },
                    {
                        item: "Tracksuits",
                        link: ""
                    },
                    {
                        item: "Shorts",
                        link: ""
                    },
                    {
                        item: "Vêtements garçons",
                        link: ""
                    },
                    {
                        item: "Vêtements filles",
                        link: ""
                    },
                    {
                        item: "Accessoires",
                        link: ""
                    },
                    {
                        item: "Sacs et sacs à dos",
                        link: ""
                    },
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "Dernières tailles",
                        link: ""
                    },
                ]
            },
            {
                subtitle: "Collections",
                items: [
                    {
                        item: "Originals",
                        link: ""
                    },
                    {
                        item: "Ultraboost",
                        link: ""
                    },
                    {
                        item: "Ozweego",
                        link: ""
                    },
                    {
                        item: "ZX",
                        link: ""
                    },
                    {
                        item: "NMD",
                        link: ""
                    },
                    {
                        item: "Adilette",
                        link: ""
                    },
                ]
            },
        ],
    },

]


const dataArrived =
{
    title: "PREMIER ARRIVÉ, PREMIER SERVI",
    text: "Célèbre le Black Friday avec l'accès en avant-première réservé aux membres de l'adiClub : jusqu'à -50 % dès maintenant !",

    links: [
        "modéles hommes",
        "modéles femmes",
        "produits enfants"
    ]
}

const dataMessi =
{
    title: "impossible is nothing",
    text: "Il en a déjà joué quatre. Lionel Messi se prépare pour la Coupe du Monde de la FIFA 2022™ avec un toro impossible.",
    link: "découvrir",
    path: "/"
}



const dataSlider = [
    {
        id: 1,
        title: "Femmes",
        shoes: [
            {
                name: "All shoes F",
                link: "découvrir",
                path: '/'
            },
            {
                img: shoes1,
                name: "sneakers",
                path: '/'
            },
            {
                img: shoes2,
                name: "chaussures de running",
                path: '/'
            },
            {
                img: shoes3,
                name: "tongs",
                path: '/'
            },
            {
                img: shoes4,
                name: "sport & training",
                path: '/'
            },
            {
                img: shoes5,
                name: "chaussures en promos",
                path: '/'
            },
        ],
        vetements: [
            {
                name: "Tous les vêtements",
                link: "découvrir",
                path: '/'
            },
            {
                img: vet1,
                name: "t-shirts",
                path: '/'
            },
            {
                img: vet2,
                name: "collants",
                path: '/'
            },
            {
                img: vet3,
                name: "sweats à capuche",
                path: '/'
            },
            {
                img: vet4,
                name: "survêtements",
                path: '/'
            },
            {
                img: vet5,
                name: "pantalons & bas de survêtement",
                path: '/'
            },
            {
                img: vet6,
                name: "brassières de sport",
                path: '/'
            },
            {
                img: vet7,
                name: "shorts",
                path: '/'
            },
            {
                img: vet8,
                name: "vêtements en promo",
                path: '/'
            },
        ],
        accessoires: [
            {
                name: "Tous les accessoires",
                link: "découvrir",
                path: '/'
            },
            {
                img: acc1,
                name: "chaussettes",
                path: '/'
            },
            {
                img: acc2,
                name: "sacs",
                path: '/'
            },
            {
                img: acc3,
                name: "accessoires tête",
                path: '/'
            }
        ],

    },

    {
        id: 2,
        title: "Hommes",
        shoes: [
            {
                name: "All shoes H",
                link: "découvrir",
                path: '/'
            },
            {
                img: shoes1,
                name: "sneakers",
                path: '/'
            },
            {
                img: shoes2,
                name: "chaussures de running",
                path: '/'
            },
            {
                img: shoes3,
                name: "tongs",
                path: '/'
            },
            {
                img: shoes4,
                name: "sport & training",
                path: '/'
            },
            {
                img: shoes5,
                name: "chaussures en promos",
                path: '/'
            },
        ],
        vetements: [
            {
                name: "Tous les vêtements",
                link: "découvrir",
                path: '/'
            },
            {
                img: vet1,
                name: "t-shirts",
                path: '/'
            },
            {
                img: vet2,
                name: "collants",
                path: '/'
            },
            {
                img: vet3,
                name: "sweats à capuche",
                path: '/'
            },
            {
                img: vet4,
                name: "survêtements",
                path: '/'
            },
            {
                img: vet5,
                name: "pantalons & bas de survêtement",
                path: '/'
            },
            {
                img: vet6,
                name: "brassières de sport",
                path: '/'
            },
            {
                img: vet7,
                name: "shorts",
                path: '/'
            },
            {
                img: vet8,
                name: "vêtements en promo",
                path: '/'
            },
        ],
        accessoires: [
            {
                name: "Tous les accessoires",
                link: "découvrir",
                path: '/'
            },
            {
                img: acc1,
                name: "chaussettes",
                path: '/'
            },
            {
                img: acc2,
                name: "sacs",
                path: '/'
            },
            {
                img: acc3,
                name: "accessoires tête",
                path: '/'
            }
        ],

    },

    {
        id: 3,
        title: "Enfants",
        shoes: [
            {
                name: "All shoes E",
                link: "découvrir",
                path: '/'
            },
            {
                img: shoes1,
                name: "sneakers",
                path: '/'
            },
            {
                img: shoes2,
                name: "chaussures de running",
                path: '/'
            },
            {
                img: shoes3,
                name: "tongs",
                path: '/'
            },
            {
                img: shoes4,
                name: "sport & training",
                path: '/'
            },
            {
                img: shoes5,
                name: "chaussures en promos",
                path: '/'
            },
        ],
        vetements: [
            {
                name: "Tous les vêtements",
                link: "découvrir",
                path: '/'
            },
            {
                img: vet1,
                name: "t-shirts",
                path: '/'
            },
            {
                img: vet2,
                name: "collants",
                path: '/'
            },
            {
                img: vet3,
                name: "sweats à capuche",
                path: '/'
            },
            {
                img: vet4,
                name: "survêtements",
                path: '/'
            },
            {
                img: vet5,
                name: "pantalons & bas de survêtement",
                path: '/'
            },
            {
                img: vet6,
                name: "brassières de sport",
                path: '/'
            },
            {
                img: vet7,
                name: "shorts",
                path: '/'
            },
            {
                img: vet8,
                name: "vêtements en promo",
                path: '/'
            },
        ],
        accessoires: [
            {
                name: "Tous les accessoires",
                link: "découvrir",
                path: '/'
            },
            {
                img: acc1,
                name: "chaussettes",
                path: '/'
            },
            {
                img: acc2,
                name: "sacs",
                path: '/'
            },
            {
                img: acc3,
                name: "accessoires tête",
                path: '/'
            }
        ],

    },
]


const dataNouveau = [
    {
        title: "Le meilleur d'adidas",
        infos: [
            {
                name: "Chaussure Stan Smith",
                subname: "Originals",
                prix: "110€",
                img: meilleur1,
                link: "/"
            },
            {
                name: "Maillot extérieur Real Madrid",
                subname: "Performance",
                prix: "90€",
                img: meilleur2,
                link: "/"
            },
            {
                name: "Maillot Domicile Argentine 22",
                subname: "Performance",
                prix: "90€",
                img: meilleur3,
                link: "/"
            },
            {
                name: "Maillot extérieur Real Madrid",
                subname: "Performance",
                prix: "90€",
                img: meilleur4,
                link: "/"
            },
            {
                name: "Sweat-shirt à capuche 3-Stripes",
                subname: "Originals",
                prix: "75€",
                img: meilleur5,
                link: "/"
            },
            {
                name: "Chaussure Advantage Base Court lifestyle",
                subname: "Sportswear",
                prix: "65€",
                img: meilleur6,
                link: "/"
            },
            {
                name: "Maillot à manches longues Domicile Allemagne 22",
                subname: "Performance",
                prix: "100€",
                img: meilleur7,
                link: "/"
            },
            {
                name: "Maillot Domicile Argentine 22",
                subname: "Performance",
                prix: "70€",
                img: meilleur8,
                link: "/"
            },
            {
                name: "Chaussure Forum Bold",
                subname: "Originals",
                prix: "120€",
                img: meilleur9,
                link: "/"
            },
            {
                name: "Chaussure Samba Vegan",
                subname: "Originals",
                prix: "100€",
                img: meilleur10,
                link: "/"
            },
            {
                name: "Slip en coton Comfort Flex 3-stripes",
                subname: "Sportswear",
                prix: "30€",
                img: meilleur11,
                link: "/"
            },
            {
                name: "Pantalon Ultimate365 Tapered",
                subname: "Performance",
                prix: "75€",
                img: meilleur12,
                link: "/"
            },

        ]
    },
    {
        title: "Nouveautés Femmes",
        infos: [
            {
                name: "Chaussure Stan Smith Bonega",
                subname: "Femmes Originals",
                subsubname: "nouveau",
                prix: "120€",
                img: femme1,
                link: "/"
            },
            {
                name: "Chaussure Superstar",
                subname: "Femmes Originals",
                subsubname: "nouveau",
                prix: "110€",
                img: femme2,
                link: "/"
            },
            {
                name: "Chaussures Forum Bold",
                subname: "Originals",
                subsubname: "créées par lena",
                prix: "120€",
                img: femme3,
                link: "/"
            },
            {
                name: "Chaussure Nora",
                subname: "Originals",
                subsubname: "nouveau",
                prix: "90€",
                img: femme4,
                link: "/"
            },
            {
                name: "Chaussure Forum Low Trap Kitchen",
                subname: "Originals",
                subsubname: "nouveau",
                prix: "120€",
                img: femme5,
                link: "/"
            },
            {
                name: "Chaussure Forum Low",
                subname: "Originals",
                subsubname: "nouveau",
                prix: "65€",
                img: femme6,
                link: "/"
            },
            {
                name: "Chaussure Superstar",
                subname: "Femmes Originals",
                subsubname: "nouveau",
                prix: "120€",
                img: femme7,
                link: "/"
            },
            {
                name: "Chaussure Samba",
                subname: "Originals",
                subsubname: "Réservé aux membres",
                prix: "200€",
                img: femme8,
                link: "/"
            },
            {
                name: "Chaussure Campus ADV x Maxallure",
                subname: "Originals",
                subsubname: "nouveau",
                prix: "90€",
                img: femme9,
                link: "/"
            },
            {
                name: "Chaussure Circoloco Forum Low",
                subname: "Originals",
                subsubname: "nouveau",
                prix: "130€",
                img: femme10,
                link: "/"
            },
            {
                name: "Claquette Adilette 22",
                subname: "Originals",
                subsubname: "nouveau",
                prix: "60€",
                img: femme11,
                link: "/"
            },
            {
                name: "Chaussure ZX 8000 Ø27",
                subname: "Originals",
                prix: "140€",
                img: femme12,
                link: "/"
            },

        ]
    },
    {
        title: "Prochainement",
        infos: [
            {
                name: "mercredi, 30 nov., 10:00 AM",
                img: prochaine1,
                link: "/"
            },
            {
                name: "jeudi, 01 déc., 10:00 AM",
                img: prochaine2,
                link: "/"
            },
            {
                name: "vendredi, 02 déc., 10:00 AM",
                img: prochaine3,
                link: "/"
            },
            {
                name: "jeudi, 15déc., 12:00 AM",
                img: prochaine4,
                link: "/"
            },
            {
                name: "jeudi, 15déc., 12:00 AM",
                img: prochaine5,
                link: "/"
            },
            {
                name: "mercredi, 30 nov., 10:00 AM",
                img: prochaine6,
                link: "/"
            },

        ]
    },
]

const dataProduits = [
    {
        id: 1,
        video: videoOne,
        title: "Gagne des produits exclusifs dédicacés",
        info: "Joue pour ganger des produits dédicacés par les plus grands joueurs de football.",
        link: "Jouer",
        path: "/aide",
    },
    {
        id: 2,
        img: imgVideo0ne,
        title: "Les nouveautés pour célébrer",
        info: "Célébre la saison avec nos nouveatés: des styles classiques revisités et des looks prêts pour les fêtes.",
        link: "Acheter",
        path: "/aide",
    },
    {
        id: 3,
        video: videoTwo,
        title: "La sensation boost",
        info: `Voici le nouveau pack Ultraboost DNA. Disponible en exclusivité chez adidas`,
        link: "Acheter",
        path: "/aide",
    },
    {
        id: 4,
        video: videoThree,
        title: "Appli confirmes",
        info: "Découvre en avant-première les dernières collabs, les sorties exclusives et les drops hype.",
        link: "Télécharger maintenant",
        path: "/aide",
    },
    {
        id: 5,
        img: imgVideoTwo,
        title: "3,2,1... go !",
        info: "Déniche la silhouette de running qu'il te faut avec l'outil adidas dédié",
        link: "Commencer",
        path: "/aide",
    },
]

const dataText = [
    {
        title: "Adidas : des tenues de sport, du style et de nombreuses histoires depuis 1949",
        infos1: "Le sport nous permet de rester en forme. D'ouvrir notre esprit. Et de nous rassembler. À travers le sport, nous avons le pouvoir de changer des vies. Que ce soit avec des histoires d'athlètes inspirants. Des conseils de pros pour te motiver. Ou des tenues de sport conçues avec les dernières technologies pour progresser et battre tes records. adidas équipe aussi bien le runner que le joueur de basketball, le fan de football que l'amateur de fitness. Le randonneur qui aime s'échapper de la ville. Ou le professeur de yoga qui enseigne les différentes positions. On retrouve aussi les 3 bandes dans l'univers de la musique. Sur scène et dans les festivals. Nos vêtements de sport te permettent de rester concentrer avant le départ. Pendant la course. Et sur la ligne d'arrivée. Nous sommes là pour soutenir les créateurs. Améliorer leurs performances. Leurs vies. Et changer le monde. ",
        infos2: "adidas, c’est bien plus que des vêtements de sport et de training. Nous nous associons aux meilleurs de l’industrie pour créer avec eux. Nous offrons ainsi à nos fans les tenues de sport et le style dont ils ont besoin pour répondre à leurs besoins sportifs, tout en gardant un esprit écoresponsable. Nous sommes là pour soutenir les créateurs. Améliorer leur performance. Créer un changement. Et nous pensons à l'impact que nous avons sur notre monde."
    },

    {
        title: "Des Vêtements de sport, pour tous les sports",
        infos1: "adidas conçoit des articles de sport pour tous les athlètes. Des créateurs qui aiment innover. Défier les conventions. Briser les règles et en définir de nouvelles. Pour les bousculer à nouveau. Nous équipons les clubs, les groupes, les sélections et les sportifs individuels avec des tenues d'avant-match. Pour qu'ils restent concentrés. Nous faisons des articles de sport pour qu'ils atteignent leurs objectifs. Pour gagner des matches. Nous sommes le magasin de sport pour les femmes, avec des brassières et des tights conçus spécialement pour leurs sessions d'entraînement. Quel que soit leur sport et leur intensité. Nous créons, innovons, encore et encore. Nous testons les nouvelles technologies. Sur le terrain, sur la piste, sur le parquet, sur la route et même à la piscine. Nous nous inspirons des vêtements de sport rétro pour créer de nouveaux modèles streetwear. Comme la NMD ou le survêtement Firebird. Les modèles classiques sont revisités pour l'ère moderne. Comme la Stan Smith. Et la Superstar. Qui s'affichent aussi bien dans les rues que sur les scènes du monde entier.",
        infos2: "À travers nos collections, nous brouillons les frontières entre la haute couture et la haute performance. C’est le cas de notre collection de vêtements de sport adidas by Stella McCartney, conçue pour un style tendance à l'intérieur et à l'extérieur de la salle de sport. Ou encore certaines de nos pièces lifestyle adidas Originals, qui peuvent également être portées pour le sport. Nos vies sont en évolution constante. Elles deviennent toujours plus polyvalentes. Et adidas en tient compte pour concevoir ses articles."
    }
]

const dataFooterMobile = [
    {
        name: "Livraison",
        path: "/aide"
    },
    {
        name: "Retour",
        path: "/aide"
    },
    {
        name: "Paiement",
        path: "/aide"
    },
    {
        name: "Aide",
        path: "/aide"
    },
    {
        name: "Suivi De Commande",
        path: "/aide"
    },
    {
        name: "Localisateur de magasin",
        path: "/aide"
    },
    {
        name: "Responsable du site",
        path: "/aide"
    },
]

const dataFooterMobileTwo = [
    {
        name: "Gérer les Données",
        path: "/aide"
    },
    {
        name: "Centre de traitement des données personnelles",
        path: "/aide"
    },
    {
        name: "Cookies",
        path: "/aide"
    },
    {
        name: "Répertoire des cookies",
        path: "/aide"
    },
    {
        name: "Politique de protection des données personelles",
        path: "/aide"
    },
    {
        name: "Condition d'utilisation",
        path: "/aide"
    },
]


const dataFooterDesktop = [
    {
        title: "produits",
        links: [
            {
                name: "chaussures",
                path: "/aide"
            },
            {
                name: "vêtements",
                path: "/aide"
            },
            {
                name: "accessoires",
                path: "/aide"
            },
            {
                name: "nouveautés",
                path: "/aide"
            },
            {
                name: "dates de sortie",
                path: "/aide"
            },
            {
                name: "meilleures ventes",
                path: "/aide"
            },
            {
                name: "outlet",
                path: "/aide"
            },
        ]
    },
    {
        title: "sports",
        links: [
            {
                name: "football",
                path: "/aide"
            },
            {
                name: "basketball",
                path: "/aide"
            },
            {
                name: "golf",
                path: "/aide"
            },
            {
                name: "training",
                path: "/aide"
            },
            {
                name: "outdoor",
                path: "/aide"
            },
            {
                name: "rugby",
                path: "/aide"
            },
            {
                name: "running",
                path: "/aide"
            },
            {
                name: "tennis",
                path: "/aide"
            },
        ]
    },
    {
        title: "collections",
        links: [
            {
                name: "originals",
                path: "/aide"
            },
            {
                name: "IVY PARK",
                path: "/aide"
            },
            {
                name: "ultraboost",
                path: "/aide"
            },
            {
                name: "NMD",
                path: "/aide"
            },
            {
                name: "gazelle",
                path: "/aide"
            },
            {
                name: "superstar",
                path: "/aide"
            },
            {
                name: "stan smith",
                path: "/aide"
            },
            {
                name: "ozweego",
                path: "/aide"
            },
        ]
    },
    {
        title: "Assistance",
        links: [
            {
                name: "Aide et Service Client",
                path: "/aide"
            },
            {
                name: "Livraison",
                path: "/aide"
            },
            {
                name: "Retours et remboursements",
                path: "/aide"
            },
            {
                name: "Tableau des tailles",
                path: "/aide"
            },
            {
                name: "Trouver un magasin",
                path: "/aide"
            },
            {
                name: "Plan du Site",
                path: "/aide"
            },
            {
                name: "Cartes cadeau",
                path: "/aide"
            },
            {
                name: "Réduction Étudiants",
                path: "/aide"
            },
            {
                name: "Commission Européenne de résolution des litiges",
                path: "/aide"
            },
            {
                name: "Triman",
                path: "/aide"
            },
        ]
    },
    {
        title: "Informations d'entreprise",
        links: [
            {
                name: "Qui sommes nous ?",
                path: "/aide"
            },
            {
                name: "Emploi",
                path: "/aide"
            },
            {
                name: "Presse",
                path: "/aide"
            },
            {
                name: "Application mobile",
                path: "/aide"
            },
            {
                name: "Adidas Confirmed",
                path: "/aide"
            },
            {
                name: "Adidas Blog",
                path: "/aide"
            },
            {
                name: "Adidas News",
                path: "/aide"
            },
            {
                name: "Affiliates Program",
                path: "/aide"
            },
            {
                name: "Choisir un lieu",
                path: "/aide"
            },
            {
                title: "plus de produits adidas",
                titlename: "Équipement d'entraînement"
            }
        ]
    },
]



export { listOne, listTwo, listThree, dataDesktop, dataArrived, dataMessi, dataSlider, dataNouveau, dataProduits, dataText, dataFooterMobile, dataFooterMobileTwo, dataFooterDesktop }
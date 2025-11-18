---
title: 'Politique de Confidentialité'
description: 'Politique de Confidentialité de Glitch Text Generator - Découvrez comment nous protégeons votre vie privée et comment nous collectons et utilisons les données'
date: '2025-11-16'
author: 'Admin'
tags: ['politique de confidentialité', 'protection des données', 'confidentialité des utilisateurs']
language: 'fr'
---

**Date d'entrée en vigueur : 16 novembre 2025**

Bienvenue sur Glitch Text Generator (ci-après dénommé "le Site Web" ou "nous"). Nous prenons très au sérieux la protection de votre vie privée. Cette Politique de Confidentialité explique comment nous collectons, utilisons, stockons et protégeons vos informations.

## 1. Aperçu de la Collecte d'Informations

### 1.1 Informations que Nous Ne Collectons PAS

**Le Site Web s'engage à :**

- ❌ **Ne pas stocker le contenu textuel que vous saisissez** : Tout le contenu que vous saisissez dans le générateur de texte est traité localement dans votre navigateur uniquement et n'est jamais téléchargé sur nos serveurs
- ❌ **Ne pas exiger d'inscription ou de connexion** : Vous pouvez utiliser toutes les fonctionnalités sans créer de compte
- ❌ **Ne pas collecter d'informations d'identification personnelle** : Nous ne collectons pas votre nom, e-mail, numéro de téléphone ou autres informations personnelles
- ❌ **Ne pas utiliser de Cookies pour stocker des données personnelles** : Nous ne stockons aucune information personnellement identifiable via les Cookies

### 1.2 Données Anonymes que Nous Collectons

Pour améliorer la qualité du service et l'expérience utilisateur, nous collectons les informations statistiques anonymes suivantes via des outils d'analyse tiers :

**Collectées via Google Analytics :**

- Pages vues et chemins de navigation
- Types d'appareils utilisés (ordinateur, mobile, tablette, etc.)
- Type et version du navigateur
- Informations sur le système d'exploitation
- Localisation géographique (niveau pays/région et ville)
- Sources de trafic (moteurs de recherche, accès direct, liens externes, etc.)
- Temps passé sur les pages
- Types de générateurs utilisés (Zalgo, Cursed, Flip, etc.)

**Collectées via Microsoft Clarity :**

- Replays de session anonymes (pour analyser les modèles d'interaction des utilisateurs)
- Données de cartes thermiques (clics, comportement de défilement)
- Métriques de performance de page
- Journaux d'erreurs JavaScript

**Note importante :** Toutes ces données sont anonymes et non liées à votre identité personnelle. Nous ne pouvons pas identifier des utilisateurs individuels spécifiques grâce à ces données.

## 2. Méthodes de Traitement des Données

### 2.1 Traitement Local

Toutes les fonctions de conversion de texte sont effectuées localement dans votre navigateur :

- **Conversion de caractères Unicode** : Implémentée en utilisant du JavaScript frontend pur, aucune implication du serveur requise
- **Aperçu en temps réel** : Tous les effets d'aperçu sont rendus côté client
- **Copie de texte** : La fonction de copie utilise l'API presse-papiers native du navigateur

**Implémentation technique :**

- Utilise la bibliothèque `unicode-text-decorator` pour la conversion de symboles alphanumériques mathématiques
- Utilise la bibliothèque `confusables` pour l'obfuscation de caractères
- Dictionnaires de mappage de caractères personnalisés pour les effets spéciaux (Zalgo, Cursed, Glitch, etc.)

Cela signifie que le contenu de votre texte ne quitte jamais votre appareil ; nous ne pouvons pas voir ni stocker ce que vous saisissez.

### 2.2 Aucun Stockage sur Serveur

Le Site Web est déployé sur Cloudflare en utilisant la Génération de Site Statique (SSG) :

- Le site web est constitué de pages HTML statiques pré-rendues
- Pas de serveur backend ni de base de données
- Aucune possibilité de stocker des données utilisateur

## 3. Services Tiers

### 3.1 Google Analytics

**Objectif :** Analyse du trafic du site web et statistiques de comportement des utilisateurs

**Types de données collectées :**

- Statistiques de visites anonymes
- Métriques de performance de page
- Informations sur l'appareil et le navigateur de l'utilisateur
- Localisation géographique (niveau pays/ville)

**Période de conservation des données :** Selon les paramètres par défaut de Google Analytics, les données sont conservées pendant 26 mois

**Contrôles de confidentialité :** Vous pouvez refuser le suivi de Google Analytics en :

- Installant le [Module complémentaire de navigateur pour la désactivation de Google Analytics](https://tools.google.com/dlpage/gaoptout)
- Activant "Ne pas suivre" dans votre navigateur
- Utilisant le mode de confidentialité/incognito de votre navigateur

**Plus d'informations :** [Politique de Confidentialité de Google Analytics](https://policies.google.com/privacy)

### 3.2 Microsoft Clarity

**Objectif :** Analyse de l'expérience utilisateur et optimisation du site web

**Types de données collectées :**

- Replays de session anonymes
- Cartes thermiques et cartes de défilement
- Analyse des modèles de clics
- Données de performance de page

**Traitement des données :** Microsoft Clarity ne collecte aucune information personnellement identifiable (PII) ; toutes les données sont anonymes

**Protection de la confidentialité :** Clarity masque automatiquement les informations sensibles (comme le contenu des champs de saisie de mot de passe)

**Plus d'informations :** [Politique de Confidentialité de Microsoft Clarity](https://privacy.microsoft.com/privacystatement)

### 3.3 Cloudflare

**Objectif :** Hébergement de site web et Réseau de Distribution de Contenu (CDN)

**Données que Cloudflare peut collecter :**

- Adresses IP (pour la protection de sécurité et l'analyse du trafic)
- Type et version du navigateur
- Horodatages d'accès
- URLs de page demandées

**Fonctionnalités de sécurité :**

- Protection DDoS
- Chiffrement SSL/TLS
- Pare-feu d'Application Web (WAF)

**Plus d'informations :** [Politique de Confidentialité de Cloudflare](https://www.cloudflare.com/privacypolicy/)

## 4. Utilisation des Cookies

### 4.1 Cookies que Nous Utilisons

Le Site Web utilise un minimum de Cookies pour fournir des fonctionnalités de base :

**Cookies Essentiels (ne peuvent pas être désactivés) :**

- Paramètres de préférence de thème (mode clair/sombre)
- Préférence de sélection de langue (10 options de langue : en, zh, es, fr, de, ja, ko, ru, pt, id)
- Maintenance de l'état de session

**Cookies Analytiques (optionnels) :**

- Cookies Google Analytics (\_ga, \_gid, \_gat)
- Cookies Microsoft Clarity (\_clck, \_clsk)

### 4.2 Comment Gérer les Cookies

Vous pouvez gérer ou supprimer les Cookies via les paramètres du navigateur :

- **Chrome :** Paramètres > Confidentialité et sécurité > Cookies et autres données de site
- **Firefox :** Options > Vie privée et Sécurité > Cookies et Données de Sites
- **Safari :** Préférences > Confidentialité > Gérer les Données de Sites Web
- **Edge :** Paramètres > Confidentialité, recherche et services > Autorisations de cookies et de sites

**Remarque :** La désactivation des Cookies peut affecter certaines fonctionnalités du site web, telles que les paramètres de thème et les préférences de langue.

## 5. Sécurité des Données

### 5.1 Mesures de Protection Technique

Nous mettons en œuvre les mesures de sécurité suivantes pour protéger vos informations :

- **Chiffrement HTTPS :** Toutes les transmissions de données sont chiffrées via SSL/TLS
- **CDN Cloudflare :** Fournit une protection DDoS et un Pare-feu d'Application Web
- **Architecture de site statique :** Pas de base de données ni de backend, réduisant les risques de violation de données
- **Traitement local :** La conversion de texte est effectuée entièrement dans votre navigateur ; les données ne quittent jamais votre appareil

### 5.2 Sécurité des Services Tiers

Les services tiers que nous utilisons (Google Analytics, Microsoft Clarity, Cloudflare) sont tous des fournisseurs leaders du secteur avec des normes de sécurité strictes et des mesures de protection de la vie privée.

## 6. Protection de la Vie Privée des Enfants

Le Site Web ne collecte pas sciemment d'informations personnelles d'enfants de moins de 13 ans. Si vous êtes parent ou tuteur et découvrez que votre enfant nous a fourni des informations personnelles, contactez-nous et nous supprimerons immédiatement les informations pertinentes.

## 7. Transferts Internationaux de Données

Le Site Web est servi via le réseau CDN mondial de Cloudflare, et vos données peuvent être transférées entre des serveurs dans différents pays/régions. Nous veillons à ce que tous les transferts de données soient conformes aux lois applicables en matière de protection des données.

**Régions applicables :**

- Utilisateurs de l'UE : Nous respectons le Règlement Général sur la Protection des Données (RGPD)
- Utilisateurs américains : Nous respectons le California Consumer Privacy Act (CCPA)
- Autres régions : Nous respectons les lois locales applicables en matière de protection des données

## 8. Vos Droits

### 8.1 Accès et Contrôle des Données

Puisque nous ne collectons ni ne stockons vos données personnelles :

- ✅ **Droit d'accès :** Nous n'avons aucune donnée personnelle vous concernant à laquelle accéder
- ✅ **Droit à l'effacement :** Le texte que vous saisissez n'est jamais stocké et ne nécessite pas de suppression
- ✅ **Droit à la portabilité des données :** Tout le texte généré peut être librement copié et utilisé
- ✅ **Droit d'opposition :** Vous pouvez désactiver les Cookies analytiques via les paramètres du navigateur

### 8.2 Contrôle des Données Analytiques

Vous pouvez contrôler la collecte de données analytiques par :

1. **Désactiver Google Analytics :**
   - Installer l'extension de navigateur de désactivation de Google Analytics
   - Activer la fonction "Ne pas suivre" de votre navigateur

2. **Désactiver Microsoft Clarity :**
   - Bloquer le domaine clarity.ms dans votre navigateur
   - Utiliser le mode confidentialité/incognito pour la navigation

3. **Effacer les Cookies :**
   - Effacer régulièrement les Cookies du navigateur
   - Utiliser les fonctionnalités d'amélioration de la confidentialité de votre navigateur

## 9. Mises à Jour de la Politique de Confidentialité

Nous pouvons mettre à jour cette Politique de Confidentialité périodiquement. Les modifications importantes seront communiquées par :

- Des annonces bien visibles sur la page d'accueil du site web
- La mise à jour de la "Date d'Entrée en Vigueur" en haut de cette page
- Des rappels via le système de notification du site web

**Recommandation :** Veuillez consulter régulièrement cette Politique de Confidentialité pour comprendre comment nous protégeons vos informations.

## 10. Notification de Violation de Données

Bien que nous ne stockions pas de données utilisateur, en cas d'incident de sécurité impliquant des services tiers, nous :

1. Enquêterons immédiatement sur la portée et l'impact de l'incident
2. Publierons une annonce sur le site web pour informer les utilisateurs
3. Coopérerons avec les fournisseurs de services concernés pour mettre en œuvre des mesures correctives
4. Signalerons aux autorités réglementaires selon les exigences légales

## 11. Notes d'Utilisation Spécifiques à la Plateforme

### 11.1 Utilisateurs Discord

Si vous utilisez du texte généré par ce site web sur Discord :

- Le texte généré est soumis à la politique de confidentialité de Discord
- Discord peut stocker le contenu de vos messages
- Veuillez respecter les Directives de la Communauté et les Conditions d'Utilisation de Discord

### 11.2 Utilisateurs Roblox

Si vous utilisez du texte généré par ce site web sur Roblox :

- Le texte généré est soumis à la politique de confidentialité de Roblox
- Roblox peut filtrer ou enregistrer le contenu du chat
- Veuillez respecter la Politique de Contenu et les Conditions d'Utilisation de Roblox

### 11.3 Utilisateurs Minecraft

Si vous utilisez du texte généré par ce site web dans Minecraft :

- Les serveurs peuvent enregistrer l'historique du chat
- Différents serveurs peuvent avoir différentes politiques de confidentialité
- Veuillez respecter les règles du serveur et l'EULA de Minecraft

## 12. Nous Contacter

Si vous avez des questions, des commentaires ou des plaintes concernant cette Politique de Confidentialité, veuillez nous contacter via :

- Visitez notre [page À propos](/about) pour obtenir les coordonnées
- Envoyez un message via le formulaire de contact fourni sur le site web

**Délai de réponse :** Nous répondrons dans les 7 jours ouvrables suivant la réception de votre demande.

## 13. Conformité Légale

### 13.1 Lois Applicables

Cette Politique de Confidentialité est régie par les lois et règlements suivants :

- Règlement Général sur la Protection des Données (RGPD) - applicable aux utilisateurs de l'UE
- California Consumer Privacy Act (CCPA) - applicable aux résidents de Californie
- Autres lois internationales et régionales applicables en matière de protection des données

### 13.2 Résolution des Litiges

Tout litige découlant de cette Politique de Confidentialité doit d'abord être résolu par une négociation amiable. Si la négociation échoue, les litiges doivent être soumis à un tribunal compétent.

## 14. Résumé

**Nos Engagements en Matière de Confidentialité :**

✅ **Traitement entièrement local** : Le contenu de votre texte ne quitte jamais votre navigateur  
✅ **Aucune inscription requise** : Utilisation sans fournir d'informations personnelles  
✅ **Analyse anonyme** : Seules des données statistiques anonymes sont collectées pour améliorer le service  
✅ **Transparence** : Explication claire des données que nous collectons et de la façon dont nous les utilisons  
✅ **Contrôle utilisateur** : Vous pouvez désactiver les fonctionnalités analytiques à tout moment  
✅ **Sécurité des données** : Transmission de données protégée via HTTPS et Cloudflare

**En termes simples :** Nous ne savons pas quel texte vous saisissez et nous ne stockons aucune de vos informations personnelles. Nous collectons uniquement des statistiques anonymes d'utilisation du site web pour améliorer l'expérience utilisateur.

---

**Dernière mise à jour : 16 novembre 2025**

Merci d'utiliser Glitch Text Generator ! Nous nous engageons à protéger votre vie privée tout en vous offrant la meilleure expérience de génération de texte.

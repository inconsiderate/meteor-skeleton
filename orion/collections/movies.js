
Movies = new orion.collection('movies', {
    singularName: 'movie', // The name of one of this items
    pluralName: 'movies', // The name of more than one of this items
    title: 'Movies', // The title of the page
    link: {
        /**
        * The text that you want to show in the sidebar. The default value is the name of the collection, so in this case is not necesary
        */
        title: 'Movies'
    },
    /**
    * Tabular settings for this collection
    */
    tabular: {
        columns: [
            { data: 'title', title: 'title' },
            { data: 'releaseDate', title: 'releaseDate' },
            orion.attributeColumn('image', 'logo', 'logo'),
            orion.attributeColumn('image', 'poster', 'poster'),
            orion.attributeColumn('image', 'banner', 'banner'),
            { data: 'studio', title: 'studio' },
        ]
    }
});

Movies.helpers({
    getCreator: function () {
        return Meteor.users.findOne({ _id: this.createdBy });
    }
});


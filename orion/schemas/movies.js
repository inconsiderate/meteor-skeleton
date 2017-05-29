/**
 * Now we will attach the schema for that collection. Orion will automatically create the corresponding form.
 */

 Movies.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: 'Title'
    },
    publisher: {
        type: String,
        label: "publisher",
        autoform: {
            afFieldInput: {
                type: "select",
                options: function () {
                    return { marvel: 'marvel', dc: 'dc', other: 'other' };
                }
            }
        }
    },
    attributes: {
        type: [String],
        label: "attributes",
        autoform: {
            afFieldInput: {
                type: "select-checkbox-inline",
                options: function () {
                    return { mcu: 'Marvel Shared Universe', animated: 'Animated', liveAction: 'Live Action', tv: 'TV Show', featureFilm: 'Feature Film' };
                }
            }
        }
    },
    studio: {
        type: String,
        label: 'Studio',
        optional: true
    },
    rumourSource: {
        type: String,
        label: 'Rumour Source',
        optional: true
    },  
    confirmationSource: {
        type: String,
        label: 'Confirmation Source',
        optional: true
    },  
    estimatedDate: {
        type: String,
        label: 'Estimated Date',
        optional: true
    },
    releaseDate: {
        type: Date,
        label: "Release Date",
        autoform: {
        afFieldInput: {
            type: "datetime-local"
        }
    },
    optional: true
    },
    endDate: {
        type: Date,
        label: "End Date",
        autoform: {
            afFieldInput: {
                type: "datetime-local"
            }
        },
        optional: true
    },
    weeklyAiring: {
        type: String,
        label: 'Airs Weekly On:',
        optional: true
    },
    chronologyDate: {
        type: String,
        label: 'Chrono Date',
        optional: true
    },
    viewOrder: {
        type: Number,
        label: 'View Order',
        optional: true
    }  ,
    description: orion.attribute('froala', {
        label: 'description',
        optional: true
    }),
    trailer: {
        type: String,
        label: 'Trailer',
        optional: true
    },
    watchnow: {
        type: String,
        label: 'Watch Now',
        optional: true
    },
    trakt: {
        type: String,
        label: 'Trakt',
        optional: true
    },
    /**
    * WARNING: the url of the image will not be saved in .image, it will be saved in .image.url.
    */
    logo: orion.attribute('image', {
        label: 'Logo Image',
        optional: true
    }),
    poster: orion.attribute('image', {
        label: 'Poster Image',
        optional: true
    }),
    banner: orion.attribute('image', {
        label: 'Banner Image',
        optional: true
    }),
    /**
    * This attribute sets the user id of the user that created this post automatically.
    */
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));


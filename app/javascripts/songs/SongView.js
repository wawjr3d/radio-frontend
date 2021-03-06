'use strict';

var BaseView = require('../base/BaseView');

var SongView = BaseView.extend({
    template: 'songs/song',

    onDOM: function() {
        var oldWidth = this.$('.rating-inner1').width(),
            newWidth = oldWidth * this.model.get('rating') / 100;
        this.$('.rating').width(newWidth);
    }
});

module.exports = SongView;

(function() {
    angular.module('app', ['angularMoment'])
        //comments
        .component('comments', {
            controller() {
                console.log('comments!');
            },
            templateUrl: './templates/comments.html'
        })
        .component('commentForm', {
            controller() {
                console.log('comment-form!');
            },
            templateUrl: './templates/forms/comment.html'
        })
        //posts
        // .component('posts', {
        //     controller() {
        //       console.log('post');
        //     },
        //     templateUrl: './templates/posts.html'
        // })
        .component('posts', {
            controller() {
                const vm = this;
                vm.$onInit = () => {
                    vm.showForm = false;
                    vm.posts = [{
                            id: 0,
                            timestamp: new Date('2016-12-17T03:24:00'),
                            title: 'Harmonious Living',
                            body: `Retrospect last century, it is not difficult to find that, while human's living ways and living states are changing enormously, they cost lots of source and energy, which leads to environmental pollutions and resource's shortage and have a bad effect on ecological balance. To urban architectures, the developing mode has to be done from traditional high-consumption developing mode to low-consumption and low-pollution developing mode. Ecological architecture is the essential way for such transformation and also the essential trends to current world development.`,
                            author: 'Patrick Rauls',
                            image: './img/post1.jpg',
                            comments: [],
                            likes: 6
                        },
                        {
                            id: 1,
                            timestamp: new Date('2017-01-17T13:24:00'),
                            title: 'Solar Roof',
                            body: `The sun provides more than enough energy in just one hour to supply our planet’s energy needs for an entire year. Your home can capture this free, abundant energy source through rooftop solar tiles, turning sunlight into electricity for immediate use or storage in a Powerwall battery. The sun provides more than enough energy in just one hour to supply our planet’s energy needs for an entire year. Your home can capture this free, abundant energy source through rooftop solar tiles, turning sunlight into electricity for immediate use or storage in a Powerwall battery.`,
                            author: 'Elon Musk',
                            comments: [],
                            image: './img/post2.jpg',
                            likes: 0
                        }
                    ];
                    vm.sort = "-likes";
                }
                vm.showPostForm = () => {
                    vm.showForm = true;
                }
                vm.hidePostForm = () => {
                    vm.showForm = false;
                }
                vm.submitPost = () => {
                    vm.post.id = vm.posts.length;
                    vm.post.timestamp = new Date();
                    vm.post.likes = 0;
                    vm.posts.push(vm.post);
                    vm.hidePostForm();
                    delete vm.post;
                }
                vm.like = (n) => {
                    vm.posts[n].likes++;
                }
                vm.dislike = (n) => {
                    vm.posts[n].likes > 1 ?
                        vm.posts[n].likes-- :
                        vm.posts[n].likes = 0;
                }
                vm.postComment = (n) => {
                    vm.posts[n].comment = {
                        id: vm.posts[n].comments.length,
                        text: vm.posts[n].comment
                    }
                    vm.posts[n].comments.push(vm.posts[n].comment);
                    delete vm.posts[n].comment;
                }
                vm.showComments = (n) => {
                    vm.posts[n].showComments = true;
                }
                vm.hideComments = (n) => {
                    vm.posts[n].showComments = false;
                }
            },
            templateUrl: './templates/posts.html'
        })
})();

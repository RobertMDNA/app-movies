let MovieComp = { // creacion de componente movies local
    template: `
        <div>
            <img :src="cover">
            <h2 v-text="title"></h2>
            <p v-text="synopsis"></p>
            <button @click="toggleLike" v-text="like ? 'Favorita' : 'Agregar a Favoritos'"/> <!-- condicional ternario -->
            <hr>
        </div>
    `,
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            required: false,
            default: 'No posee synopsis'
        },
        cover: {
            type: String,
            required: true,
        },
        like: {
            type: Boolean,
            required: true,
            default(){
                return false
            }
        }
    },
    methods: {
        toggleLike(){
            let data={
                id: this.id,
                like: !this.like
            }
            this.$emit('toggleLike', data)
        }
    }
}
let app = new Vue({
    el: "#pruebaVue",
    data: {
        nombres: "Juan Ignacio",
        apellidos: "Oliva Aquino",
        ocupacion: "Desarrollador",
        sexo: "Masculino",
    },
    methods:{
        nombreCompleto(){
            return this.nombres + " " + this.apellidos;
        }
    },
    computed:{
        computedNombreCompleto(){
            return this.nombres + " " + this.apellidos;
        }
    }
})
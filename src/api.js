let BASE = 'https://api.b7web.com.br/devsfood/api'; //https://api.b7web.com.br/devsfood/api   http://localhost:3000'
export default {
    getCategories: async () => {
        // GET / Categorias
        const res = await fetch(BASE + '/categories');
        const json = await res.json();
        return json;

    },

    getProducts: async (category, page, search) => {
        //GET /api/products ([search, page, category])
        let fields = {};
        if (category !== 0 ){
            fields.category = category;
        }
        if (page > 0 ){
            fields.page = page;
        }
        if(search != ''){
            fields.search =search;
        }

        let queryString = new URLSearchParams(fields).toString();

        const res = await fetch(BASE + '/products?'+queryString);
        const json = await res.json();
        return json;

    }

};
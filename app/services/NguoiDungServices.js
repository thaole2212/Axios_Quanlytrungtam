function NguoiDungServices(){
    this.layDS=function(){
        return axios({
            method: 'get',
            url: 'https://6131ea22ab7b1e001799b237.mockapi.io/UserAdmin',
          });
            
    }
    this.them=function(nd){
        return axios({
            method: 'post',
            url: 'https://6131ea22ab7b1e001799b237.mockapi.io/UserAdmin',
            data: nd
        });
    }
    this.laychitiet=function(id){
        return axios({
            method: 'get',
            url: `https://6131ea22ab7b1e001799b237.mockapi.io/UserAdmin/${id}`,
        });
    }
    this.capnhat=function(nd,id){
        return axios({
            method: 'put',
            url: `https://6131ea22ab7b1e001799b237.mockapi.io/UserAdmin/${id}`,
            data: nd
        });
    }
    this.xoaND = function(id){
        return axios({
            method: 'delete',
            url: `https://6131ea22ab7b1e001799b237.mockapi.io/UserAdmin/${id}`,
        });
       
    }
}
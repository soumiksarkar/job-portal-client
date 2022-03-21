export class AppUtils {
    static alert(placeholder: string, message: string, type: string, btnId: string) {
        var alertPlaceholder = document.getElementById(placeholder);
        var wrapper = document.createElement('div');
        wrapper.innerHTML = 
        '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button id="'+ btnId +'" type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>';

        alertPlaceholder.append(wrapper);
    }
}
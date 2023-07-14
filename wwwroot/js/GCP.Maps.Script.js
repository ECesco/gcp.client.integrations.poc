window.initAutocomplete = () => {

    let autocomplete;
    let address1Field;
    let address2Field;
    let postalField;

    fillInAddress = (autocomplete) => {
        // Get the place details from the autocomplete object.
        const place = autocomplete.getPlace();
        DotNet.invokeMethod('gcp.client.integrations.poc', 'AddressChanged', place);
    }
    
    addressField = document.querySelector("#risk-address");

    // Create the autocomplete object, restricting the search predictions to
    // addresses in the US and Canada.
    autocomplete = new google.maps.places.Autocomplete(addressField, {
        componentRestrictions: {
            country: ["uy"]},
            // https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult
            fields: ["address_components", "geometry"],
            types: ["address"],
    });
    
    addressField.focus();
    // When the user selects an address from the drop-down, populate the
    // address fields in the form.
    autocomplete.addListener("place_changed", function () {
        fillInAddress(autocomplete)
    });
}
     
    
import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';
import '../assets/css/styles.css';

const AutoCompleteComponent = (props) => {

    return (
        <PlacesAutocomplete
            value={props.location}
            onChange={(evt) => props.handleChange(evt)}
            onSelect={(evt) => props.handleSelect(evt)}
        >
            {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
                <div className="form-group">
                    <input
                        {...getInputProps({
                            placeholder: 'Search the place ...',
                            className: 'form-control',
                        })}
                    />

                    <div className="autocomplete-dropdown-container">
                        {loading && <div>Loading...</div>}
                        {suggestions.map(suggestion => {
                            const className = suggestion
                                ? 'dropdown-container'
                                : 'dropdown-empty'; 
                            return (
                                <div
                                    {...getSuggestionItemProps(suggestion, {
                                        className
                                    })}
                                >
                                    <span>{suggestion.description}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </PlacesAutocomplete>
    );
}

export default AutoCompleteComponent



import './FilterMovies.scss';
import * as React from 'react';
import Box from '@mui/joy/Box';
import Checkbox from '@mui/joy/Checkbox';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import Typography from '@mui/joy/Typography';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../Buttons/Button/Button';
import { fetchFilterMovies } from '../../store/reducer/moviesSlice';

export default function FilterMovies({ genres, languages, page }) {
  const [selectedGenres, setselectedGenres] = useState('');
  const [selectedLanguage, setsselectedLanguage] = useState('');
  const dispatch = useDispatch();

  const qweryParams = {
    genresId: selectedGenres,
    language: selectedLanguage,
    page: page,
  };

  return (
    <>
      <Box sx={{ width: 300 }}>
        <Typography id="genres" level="body2" fontWeight="lg" mb={3} mt={6} 
          sx={{ color: 'rgb(179, 54, 50)', fontSize: '20px', textDecoration: 'underline' }}>
          Search your movie by filters
        </Typography>
        <Box role="group" aria-labelledby="genres">
          <List
            row
            wrap
            sx={{
              '--List-gap': '12px',
              '--List-item-radius': '20px',
              marginBottom: '40px',
              color: 'rgb(179, 54, 50)',
            }}
          >
            {genres.map((genre, index) => (
              <ListItem key={genre.id} className="genre_item">
                <Checkbox
                  disabled={index === 20}
                  overlay
                  variant="outlined"
                  label={genre.name}
                  onClick={() => setselectedGenres(genre.id)}
                />
              </ListItem>
            ))}
          </List>
          <Autocomplete
            options={languages}
            renderOption={(props, option) => (
              <li
                {...props}
                key={option.iso_639_1}
                onClickCapture={() => { setsselectedLanguage(option.iso_639_1); }}
              >
                {option.english_name}
              </li>
            )}
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option) => option.english_name}
            sx={{ width: 280 }}
            renderInput={(languages) => <TextField {...languages} label="Languages" />}
          />
        </Box>
      </Box>
      <Button
        nameOfClass="button button_search"
        type="button"
        value="Search now"
        onClick={() => dispatch(fetchFilterMovies(qweryParams))}
      />
    </>
  );
}

FilterMovies.propTypes = {
  genres: PropTypes.array,
  languages: PropTypes.array,
};

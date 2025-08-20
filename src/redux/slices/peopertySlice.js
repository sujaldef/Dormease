import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const uploadImage = createAsyncThunk(
  'property/uploadImage',
  async (file, { rejectWithValue }) => {
    try {
      const formData = new FormData();
      formData.append('image', file);

      const response = await fetch('http://localhost:8000/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to upload image');
      }

      return data.imageUrl;
    } catch (error) {
      return rejectWithValue(error.message || 'Something went wrong. Try again.');
    }
  }
);

export const submitProperty = createAsyncThunk(
  'property/submitProperty',
  async (propertyData, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8000/api/properties', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(propertyData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to submit property');
      }

      return data.property;
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to submit property. Please try again.');
    }
  }
);

const initialState = {
  properties: [],
  selectedFacilities: [],
  rooms: [],
  ownerName: '',
  propertyType: 'hostel',
  phoneNumber: '',
  gender: 'he/him',
  propertyName: '',
  address: '',
  allowGenders: 'girls',
  furnished: 'fully furnished',
  food: 'mess included',
  description: '',
  profilePic: null,
  loading: false,
  error: null,
};
export const fetchProperties = createAsyncThunk(
  'property/fetchProperties',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('http://localhost:8000/api/properties', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to fetch properties');
      }

      return data.properties; // Matches the backend response format {"properties": [...]}
    } catch (error) {
      return rejectWithValue(error.message || 'Failed to fetch properties');
    }
  }
);
const propertySlice = createSlice({
  name: 'property',
  initialState,
  reducers: {
    setSelectedFacilities(state, action) {
      const value = action.payload;
      state.selectedFacilities = state.selectedFacilities.includes(value)
        ? state.selectedFacilities.filter((item) => item !== value)
        : [...state.selectedFacilities, value];
    },
    addRoom(state) {
      state.rooms.push({
        id: Date.now(),
        seater: '1-seater',
        ac: 'Non-AC',
        furnishing: 'Furnished',
        price: '',
      });
    },
    updateRoom(state, action) {
      const { id, field, value } = action.payload;
      state.rooms = state.rooms.map((room) =>
        room.id === id ? { ...room, [field]: value } : room
      );
    },
    removeRoom(state, action) {
      state.rooms = state.rooms.filter((room) => room.id !== action.payload);
    },
    setOwnerName(state, action) {
      state.ownerName = action.payload;
    },
    setPropertyType(state, action) {
      state.propertyType = action.payload;
    },
    setPhoneNumber(state, action) {
      state.phoneNumber = action.payload;
    },
    setGender(state, action) {
      state.gender = action.payload;
    },
    setPropertyName(state, action) {
      state.propertyName = action.payload;
    },
    setAddress(state, action) {
      state.address = action.payload;
    },
    setAllowGenders(state, action) {
      state.allowGenders = action.payload;
    },
    setFurnished(state, action) {
      state.furnished = action.payload;
    },
    setFood(state, action) {
      state.food = action.payload;
    },
    setDescription(state, action) {
      state.description = action.payload;
    },
    setProfilePic(state, action) {
      state.profilePic = action.payload;
    },
    resetForm(state) {
      state.selectedFacilities = [];
      state.rooms = [];
      state.ownerName = '';
      state.propertyType = 'hostel';
      state.phoneNumber = '';
      state.gender = 'he/him';
      state.propertyName = '';
      state.address = '';
      state.allowGenders = 'girls';
      state.furnished = 'fully furnished';
      state.food = 'mess included';
      state.description = '';
      state.profilePic = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProperties.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProperties.fulfilled, (state, action) => {
        state.properties = action.payload;
        state.loading = false;
      })
      .addCase(fetchProperties.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(uploadImage.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(uploadImage.fulfilled, (state, action) => {
        state.profilePic = action.payload;
        state.loading = false;
      })
      .addCase(uploadImage.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(submitProperty.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitProperty.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
        state.selectedFacilities = [];
        state.rooms = [];
        state.ownerName = '';
        state.propertyType = 'hostel';
        state.phoneNumber = '';
        state.gender = 'he/him';
        state.propertyName = '';
        state.address = '';
        state.allowGenders = 'girls';
        state.furnished = 'fully furnished';
        state.food = 'mess included';
        state.description = '';
        state.profilePic = null;
      })
      .addCase(submitProperty.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export const {
  setSelectedFacilities,
  addRoom,
  updateRoom,
  removeRoom,
  setOwnerName,
  setPropertyType,
  setPhoneNumber,
  setGender,
  setPropertyName,
  setAddress,
  setAllowGenders,
  setFurnished,
  setFood,
  setDescription,
  setProfilePic,
  resetForm,
} = propertySlice.actions;

export default propertySlice.reducer;
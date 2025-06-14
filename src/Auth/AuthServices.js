import axios from '../Api/Api';

const BASE_URL = 'http://localhost:8000/api';

const getAuthHeaders = () => ({
  'Authorization': `Bearer ${localStorage.getItem('token')}`,
});

const register = async (formData) => {
  const response = await axios.post('/register', formData);
  return response.data;
};

// Login
const login = async (formData) => {
  const response = await axios.post('/login', formData);
  const { token, user } = response.data;

  if (token) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  return user;
};

// Logout
const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

const getUserProfile = async () => {
  // const token = localStorage.getItem('token');
  const response = await axios.get(`${BASE_URL}/akun-saya`, {
    headers: getAuthHeaders(),
  });

  console.log("API Response akun-saya:", response.data);
  return response.data;
};

const getAllKursus = async () => {
  const response = await axios.get('/kursus');
  return response.data;
};

const getKursusSiswa = async () => {
   const response = await axios.get(`${BASE_URL}/materi/kursus-siswa`, {
    headers: getAuthHeaders(),
  });
  return response.data.kursus;
}

const getKursusTutor = async () => {
  const response = await axios.get(`${BASE_URL}/materi/kursus-tutor`, {
    headers: getAuthHeaders(),
  });
  return response.data.kursus;
};


const getKursusDetail = async (id) => {
  const response = await axios.get(`${BASE_URL}/kursus-detail/by-kursus/${id}`);
  return response.data;
};

const updateKursusDetail = async (id, data) => {
  const response = await axios.put(`${BASE_URL}/kursus-detail/by-kursus/${id}/edit`, data);
  return response.data;
}

const getMateriKursus = async (id) => {
  const response = await axios.get(`${BASE_URL}/materials/kursus/${id}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};

const getDetailMateriKursus = async (id, materialId) => {
  const response = await axios.get(`${BASE_URL}/materials/kursus/${id}/${materialId}`);
  return response.data;
};

const deleteMateri = async (id) => {
  try{
  const response = await axios.delete(`${BASE_URL}/materials/${id}`, {
    headers: getAuthHeaders(),
  });
  return response.data;
} catch (error) {
  console.error("Error deleting materi:", error);
  throw error;
}
};

const getKursus = async () => {
  const response = await axios.get(`${BASE_URL}/kursus`);
  return response.data;
}

const uploadMaterial = async (kursusId, formData) => {
  try {
  const response = await axios.post(`${BASE_URL}/materials/upload/${kursusId}`, formData, {
    headers: {
      ...getAuthHeaders(),
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
} catch (error) {
  console.error("Upload error:", error.response?.data || error.message);
  throw error;
}

}

const uploadDokumen = async (formData) => {
  const response = await axios.post(`${BASE_URL}/cloudinary/upload`, formData, {
    headers: getAuthHeaders(),
  });
  return response.data;
}

const getDokumen = async () => {
  const response = await axios.get(`${BASE_URL}/documents`, {
    headers: getAuthHeaders(),
  });
  return response.data;
}

const tandaiSelesai = async (materialId) => { 
  const response = await axios.post(
    `${BASE_URL}/materi/${materialId}/selesai`, 
    {}, // kosongin body, karena semua info ada di URL & header
    { headers: getAuthHeaders() } // ini param ke-3
  );
  return response.data;
};

const cekSelesai = async (materialId) => {
  const response = await axios.get(`${BASE_URL}/materi/${materialId}/status`, {
    headers: getAuthHeaders(),
  });
  return response.data;
};


export default {
  register,
  login,
  logout,
  getUserProfile,
  getAllKursus,
  getKursusSiswa,
  getKursusTutor,
  getKursusDetail,
  updateKursusDetail,
  getMateriKursus,
  getDetailMateriKursus,
  deleteMateri,
  getKursus,
  uploadMaterial,
  uploadDokumen,
  getDokumen,
  tandaiSelesai,
  cekSelesai
};
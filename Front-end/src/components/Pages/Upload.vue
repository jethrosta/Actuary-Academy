<template>
  <div>
    <input type="file" @change="uploadVideo" />
  </div>
</template>

<script>
import axios from 'axios';

export default {
  methods: {
    uploadVideo(event) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      axios
        .post('http://localhost:8000/upload/', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.error(error);
        });
    },
  },
};
</script>
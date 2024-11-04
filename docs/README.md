# Eleroui Stories API

Welcome to **Eleroui Stories API**! This API offers simple access to a collection of stories, each featuring a title, content, date, and YouTube video link. It's perfect for developers who want to add story content easily to their applications.

----

<p align="center">
  <a href="https://elarouitales.netlify.app/"><strong>Demo</strong></a> |
  <a href="https://elaroui-stories-api.vercel.app/"><strong>Documentation</strong></a>
</p>

![Screenshot of Eleroui Stories API](src/assets/screenshots/home.png)

## Features

- 📚 Fetch all stories
- ℹ️ Retrieve details of a single story
- 🎥 Access associated YouTube videos
- 🔥 Example integration with Angular

----

## Quick Start

Follow these steps to set up Eleroui Stories API locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/h-chayma/abdelaziz-elaroui-stories-api.git
   cd abdelaziz-elaroui-stories-api
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Server**:
   ```bash
   npm start
   ```

   This will start the API server on `http://localhost:3000`.

----

## Endpoints

### List All Stories

Fetch a list of all stories available.

- **Endpoint**: `GET /stories`

- **Example Response**:
   ```json
   [
     {
       "id": 1,
       "title": "Sample Story",
       "date": "2023-01-01",
       "content": "Story content here.",
       "youtubeVideoId": "abcd1234"
     }
     // Additional stories here
   ]
   ```

### Get Story by ID

Retrieve details of a specific story using its unique ID.

- **Endpoint**: `GET /stories/:id`

- **Example Response**:
   ```json
   {
     "id": 1,
     "title": "Sample Story",
     "date": "2023-01-01",
     "content": "Story content here.",
     "youtubeVideoId": "abcd1234"
   }
   ```

----

## Response Format

The API returns data in the following structure:

```typescript
interface Story {
  id: number;
  title: string;
  date: string;
  content: string;
  youtubeVideoId: string;
}
```

----

## Angular Integration Example

If you’re using Angular, here’s a quick example of setting up a service to fetch stories:

```typescript
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoriesService {
  private apiUrl = 'http://localhost:3000/stories';

  constructor(private http: HttpClient) {}

  getAllStories(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }

  getStoryById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}
```

Now, you're all set to explore and integrate the Eleroui Stories API into your projects. Enjoy building!

----

## Contributing

Contributions are welcome! If you'd like to contribute to the Eleroui Stories API, please fork the repository and submit a pull request. Feel free to open issues for any bug reports or feature requests.

## License

This project is licensed under the [MIT License](../LICENSE). You are free to use, modify, and distribute this software in accordance with the license.
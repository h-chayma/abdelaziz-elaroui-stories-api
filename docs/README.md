# Adbaziz Eleroui Stories API

Welcome to **Adbaziz Eleroui Stories API**! This API offers simple access to a collection of stories, each featuring a title, content, date, and YouTube video link. It's perfect for developers who want to add story content easily to their applications.

---

**Demo** | **Documentation**

## Features

- 📚 Fetch all stories
- ℹ️ Retrieve details of a single story
- 🎥 Access associated YouTube videos
- 🔥 Example integration with Angular

---

## Quick Start

Follow these steps to set up Adbaziz Eleroui Stories API locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/adbaziz-eleroui-stories-api.git
   cd adbaziz-eleroui-stories-api
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

---

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

---

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

---

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

Now, you're all set to explore and integrate the Adbaziz Eleroui Stories API into your projects. Enjoy building!

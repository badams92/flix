import { Response, Request, response } from 'express';
import { Router } from 'express';
import axios from 'axios';
import { userInfo } from 'os';
import { addFavoriteMovie, removeFavoriteActors, removeFavoriteGenre } from '../database';
import { uploadPhoto } from '../helpers/cloudinary';
// import { Request } from 'aws-sdk';

// import type {Request, Response} from 'express';
import { addUser, updateUser, getUserById, getFavoriteMovies, getFavoriteActors, getFavoriteDirectors, getFavoriteGenres, removeFavoriteMovie, addUser_Movie, deleteUserMovie } from '../database/index';
const UsersRouter = Router();

UsersRouter.get('/:id', (req: Request, res: Response) => {
  getUserById(req.body)
    .then((data: object) => {
      res.send(200).json(data) })
    .catch((err: object[]) => { res.sendStatus(500) });
});


UsersRouter.post('/', (req: any, res: any) => {
  addUser(req.body)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err: any) => {
      console.error('Router: Failed to add new user.', err)
    });
});

//Multi-purpose user patcher
UsersRouter.patch('/:id', (req: Request, res: Response) => {
    updateUser(req.body, Number(req.params.id))
    .then(() => getUserById(Number(req.params.id)))
        .then((user) => {
            //this should be sending back the updated user
            req.user = user;
            res.status(200).send(user);
        })
        .catch((err: any) => {
            console.error('Router: failed to update user.', err)
        })
})

//User
UsersRouter.post('/', (req: Request, res: Response) => {
  addFavoriteMovie(req.params.user, req.params.movie)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err: any) => {
      console.error('User Router: unable to add movie to user favorites', err);
    });
});

// GET USER FAVORITES //
UsersRouter.get('/movies/:id', (req: Request, res: Response) => {
    getFavoriteMovies(Number(req.params.id))
    .then((data: object[]) => {
      res.status(200).send(data)
    })
    .catch((err: object) => { res.sendStatus(500) });
});

UsersRouter.get('/actors/:id', (req: Request, res: Response) => {
  getFavoriteActors(Number(req.params.id))
    .then((data: object[]) => res.status(200).send(data))
    .catch((err: object) => {
      console.error(err);
      res.sendStatus(500);
    });
});

UsersRouter.get('/directors/:id', (req: Request, res: Response) => {
  getFavoriteDirectors(Number(req.params.id))
    .then((data: object[]) => res.status(200).send(data))
    .catch((err: object) => {
      console.error(err);
      res.sendStatus(500);
    });
});

UsersRouter.get('/genres/:id', (req: Request, res: Response) => {
  getFavoriteGenres(Number(req.params.id))
    .then((data: object[]) => res.status(200).send(data))
    .catch((err: object) => {
      console.error(err);
      res.sendStatus(500);
    });
});
// END GET USER FAVORITES //

// USER DESTROY FAVORITES //

UsersRouter.delete('/movies/:movieId/:userId', (req: Request, res: Response) => {
  removeFavoriteMovie(Number(req.params.movieId), Number(req.params.userId))
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err: any) => { res.sendStatus(500) });
});


UsersRouter.post('/user-movies', (req: any, res: any) => {
  addUser_Movie(req.body.movieId, req.body.userId)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err: any) => {
      console.error('Router: Failed to add new user.', err);
      res.sendStatus(500);
    });
});


UsersRouter.delete('/movies/destroy', (req: Request, res: Response) => {
  deleteUserMovie(req.body.userId, req.body.movieId)
    .then(() => {
      res.sendStatus(200)
    })
});

UsersRouter.delete('/genres/destroy', (req: Request, res: Response) => {
  removeFavoriteGenre(req.body.userId, req.body.genreId)
    .then(() => {
      res.sendStatus(200)
    })
});

UsersRouter.delete('/actors/destroy', (req: Request, res: Response) => {
  removeFavoriteActors(req.body.userId, req.body.actorId)
    .then(() => { res.sendStatus(200) })
});


export default UsersRouter;

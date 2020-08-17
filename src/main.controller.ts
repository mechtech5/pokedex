import { Application } from 'express';
import { PokeService } from './services/pokemon.service';
import { AuthService } from './services/auth.service';

export class Controller {
  private pokeService: PokeService;
  private authService: AuthService;

  constructor(private app: Application) {
    this.pokeService = new PokeService();
    this.authService = new AuthService();
    this.routes();
  }

  public routes() {
    this.app.route('/').get(this.pokeService.welcomeMessage);

    this.app.route("/pokemon")
      .get(this.pokeService.getAllPokemon)
      .post(this.pokeService.addNewPokemon);

    this.app.route("/pokemon/:id")
      .get(this.pokeService.getOnePokemon)
      .delete(this.pokeService.deletePokemon)
      .put(this.pokeService.updatePokemon);

    this.app.route("/signup")
      .post(this.authService.signup);

    this.app.route("/login")
      .post(this.authService.login);
  }
}
const users_model = require('../models/users.model');
import { Request, Response } from 'express';
import { User } from '@prisma/client';

exports.getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await users_model.getAllUsers();
    res.send(users);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
exports.getUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users_model.getUser(req.params['id']);
    res.send(user);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};
exports.postUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users_model.createUser(req.body);
    res.send(user);
    res.status(201);
  } catch (error) {
    // TODO, ERROR HANDLING FOR CREATING A USER WITH AN EXISTING USERNAME
    console.error(error);
    res.sendStatus(500);
  }
};
exports.addBattleToUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user = await users_model.addBattleToUser(
      req.params['user_id'],
      req.params['battle_id']
    );
    res.send({ status: 'Update succesful' });
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

exports.deleteUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users_model.deleteUser(req.params['id']);
    res.send(user);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

exports.getUserPortfolio = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const userPortfolio = await users_model.getUserPortfolio(
      req.params['user_id'],
      req.params['battle_id']
    );
    res.send(userPortfolio);
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

exports.patchProfit = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users_model.updateProfit(
      req.params['user_id'],
      req.body,
      req.params['battle_id']
    );
    res.send({ status: 'Update succesful' });
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

exports.patchWatchlist = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await users_model.updateWatchlist(
      req.params['user_id'],
      req.body
    );
    res.send({ status: 'Update succesful' });
    res.status(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

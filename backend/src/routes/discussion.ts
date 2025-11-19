import { Router } from 'express';
import {
  getAllDiscussions,
  getDiscussionById,
  createDiscussion,
  createReply,
  likeDiscussion,
} from '../controllers/discussionController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/', authenticate, getAllDiscussions);
router.get('/:id', authenticate, getDiscussionById);
router.post('/', authenticate, createDiscussion);
router.post('/:id/replies', authenticate, createReply);
router.post('/:id/like', authenticate, likeDiscussion);

export default router;

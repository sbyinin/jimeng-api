import { VIDEO_MODEL_MAP, VIDEO_MODEL_MAP_US, VIDEO_MODEL_MAP_ASIA } from '@/api/consts/common.ts';

const VIDEO_MODEL_ORDER = [
    'jimeng-video-seedance-2.0',
    'jimeng-video-seedance-2.0-fast',
    'jimeng-video-3.5-pro',
    'jimeng-video-veo3',
    'jimeng-video-veo3.1',
    'jimeng-video-sora2',
    'jimeng-video-3.0-pro',
    'jimeng-video-3.0',
    'jimeng-video-3.0-fast',
    'jimeng-video-2.0-pro',
    'jimeng-video-2.0'
];

const VIDEO_MODEL_DESCRIPTIONS: Record<string, string> = {
    'jimeng-video-seedance-2.0': 'Seedance 2.0 视频生成模型，国内站及国际站均支持，支持 4~15 秒与 Omni Reference',
    'jimeng-video-seedance-2.0-fast': 'Seedance 2.0 Fast 视频生成模型，国内站及国际站均支持，支持 4~15 秒与 Omni Reference',
    'jimeng-video-3.5-pro': '即梦AI视频生成模型 3.5 Pro，国内站及国际站均支持',
    'jimeng-video-veo3': 'Veo3 视频生成模型，仅亚洲国际站 (HK/JP/SG/MY) 支持，固定 8 秒',
    'jimeng-video-veo3.1': 'Veo3.1 视频生成模型，仅亚洲国际站 (HK/JP/SG/MY) 支持，固定 8 秒',
    'jimeng-video-sora2': 'Sora2 视频生成模型，仅亚洲国际站 (HK/JP/SG/MY) 支持',
    'jimeng-video-3.0-pro': '即梦AI视频生成模型 3.0 Pro，国内站和亚洲国际站 (HK/JP/SG/MY) 支持',
    'jimeng-video-3.0': '即梦AI视频生成模型 3.0，国内站及国际站均支持',
    'jimeng-video-3.0-fast': '即梦AI视频生成模型 3.0 Fast，国内站和亚洲国际站 (HK/JP/SG/MY) 支持',
    'jimeng-video-2.0-pro': '即梦AI视频生成模型 2.0 Pro，国内站和亚洲国际站 (HK/JP/SG/MY) 支持',
    'jimeng-video-2.0': '即梦AI视频生成模型 2.0，国内站和亚洲国际站 (HK/JP/SG/MY) 支持'
};

const SUPPORTED_VIDEO_MODELS = new Set([
    ...Object.keys(VIDEO_MODEL_MAP),
    ...Object.keys(VIDEO_MODEL_MAP_US),
    ...Object.keys(VIDEO_MODEL_MAP_ASIA)
]);

export default {

    prefix: '/v1',

    get: {
        '/models': async () => {
            return {
                "data": [
                    {
                        "id": "jimeng",
                        "object": "model",
                        "owned_by": "jimeng-api"
                    },
                    ...VIDEO_MODEL_ORDER
                        .filter(id => SUPPORTED_VIDEO_MODELS.has(id))
                        .map(id => ({
                            id,
                            object: 'model',
                            owned_by: 'jimeng-api',
                            description: VIDEO_MODEL_DESCRIPTIONS[id] || '即梦AI视频生成模型'
                        }))
                ]
            };
        }

    }
}
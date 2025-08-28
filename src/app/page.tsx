"use client";

import React, { useState } from 'react';
import { Globe, ExternalLink, Clock, Star, Link, Hash, TrendingUp, Eye} from 'lucide-react';
import ListCard from '../components/ListCard';

const Dashboard = () => {
  const [analyzedUrl, setAnalyzedUrl] = useState("https://example-tech-blog.com");
  
  // Mock data - you'll replace this with your actual API data
  const websiteData = {
    title: "TechCrunch - Startup and Technology News",
    description: "Latest technology news, startup funding announcements, and in-depth analysis of emerging tech trends.",
    highlights: [
      "Breaking: AI startup raises $50M Series B",
      "New iPhone features leaked ahead of launch",
      "Cryptocurrency market shows signs of recovery",
      "Tesla's autonomous driving update rolling out"
    ],
    backlinks: [
      { domain: "techradar.com", authority: 85, type: "Editorial" },
      { domain: "venturebeat.com", authority: 78, type: "News" },
      { domain: "wired.com", authority: 92, type: "Reference" },
      { domain: "forbes.com", authority: 94, type: "Editorial" }
    ],
    entities: [
      { name: "Elon Musk", type: "Person", mentions: 12 },
      { name: "OpenAI", type: "Organization", mentions: 8 },
      { name: "Tesla", type: "Company", mentions: 15 },
      { name: "San Francisco", type: "Location", mentions: 6 }
    ],
    metrics: {
      pageSpeed: 85,
      seoScore: 92,
      readabilityScore: 78,
      mobileOptimization: 96,
      lastUpdated: "2 hours ago",
      estimatedTraffic: "2.4M",
      socialShares: 1247
    },
    contentAnalysis: {
      wordCount: 2450,
      readingTime: "8 min",
      sentiment: "Positive",
      keyTopics: ["Technology", "Startups", "AI", "Innovation"]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-blue-600 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-gray-900">Website Analytics</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-500">Last analyzed: 5 min ago</div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                Analyze New Site
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Site Header */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
          <div className="flex items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{websiteData.title}</h2>
              <p className="text-gray-600 mb-4">{websiteData.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <ExternalLink className="h-4 w-4" />
                <span className="font-mono">{analyzedUrl}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {/* Highlights */}
          <ListCard
            title="Key Highlights"
            items={websiteData.highlights}
            icon={Star}
            color="yellow"
          />

          {/* Backlinks */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Link className="h-5 w-5 text-green-500" />
              <h3 className="text-lg font-semibold text-gray-900">Backlinks</h3>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {websiteData.backlinks.map((backlink, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{backlink.domain}</div>
                    <div className="text-sm text-gray-500">{backlink.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-600">{backlink.authority}</div>
                    <div className="text-xs text-gray-500">Authority</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Entities */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-2 mb-4">
              <Hash className="h-5 w-5 text-purple-500" />
              <h3 className="text-lg font-semibold text-gray-900">Entities Mentioned</h3>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {websiteData.entities.map((entity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium text-gray-900">{entity.name}</div>
                    <div className="text-sm text-gray-500">{entity.type}</div>
                  </div>
                  <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs font-medium">
                    {entity.mentions} mentions
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Content Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Metrics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Eye className="h-5 w-5 text-blue-500" />
              <h3 className="text-lg font-semibold text-gray-900">Content Analysis</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{websiteData.contentAnalysis.wordCount}</div>
                <div className="text-sm text-gray-600">Words</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{websiteData.contentAnalysis.readingTime}</div>
                <div className="text-sm text-gray-600">Reading Time</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{websiteData.contentAnalysis.sentiment}</div>
                <div className="text-sm text-gray-600">Sentiment</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{websiteData.metrics.readabilityScore}</div>
                <div className="text-sm text-gray-600">Readability</div>
              </div>
            </div>
          </div>

          {/* Key Topics */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-indigo-500" />
              <h3 className="text-lg font-semibold text-gray-900">Key Topics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {websiteData.contentAnalysis.keyTopics.map((topic, index) => (
                <span key={index} className="bg-indigo-100 text-indigo-700 px-3 py-2 rounded-full text-sm font-medium">
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-600 mb-2">Last Updated</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-400" />
                <span className="text-sm font-medium">{websiteData.metrics.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
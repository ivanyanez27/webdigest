"use client";

import React, { useState } from 'react';
import { Globe, ExternalLink, Clock, Star, Link, Hash, TrendingUp, Eye} from 'lucide-react';
import ListCard from '../components/ListCard';

const Dashboard = () => {
  const [inputtedUrl, setInputtedUrl] = useState("");
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

  // Functions
  const handleInputtedUrl = (url: string) => {
    setInputtedUrl(url);
  };

  const handleButtonClick = () => {
    // TODO: Call API to analyze the website
    setAnalyzedUrl(inputtedUrl);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <div className="bg-black/50 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h1 className="text-xl font-bold text-white">WebDigest</h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Enter website URL..."
                  value={inputtedUrl}
                  onChange={(e) => handleInputtedUrl(e.target.value)}
                  className="px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-200" onClick={handleButtonClick}>
                  Analyze Site
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Site Header */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 p-6 mb-8">
          <div className="flex items-start">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-white mb-2">{websiteData.title}</h2>
              <p className="text-gray-300 mb-4">{websiteData.description}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <ExternalLink className="h-4 w-4" />
                <span className="font-mono">{analyzedUrl}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Analytics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Highlights */}
          <ListCard
            title="Key Highlights"
            items={websiteData.highlights}
            icon={Star}
            color="yellow"
          />


        
          {/* Entities */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Hash className="h-5 w-5 text-purple-400" />
              <h3 className="text-lg font-semibold text-white">Entities Mentioned</h3>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {websiteData.entities.map((entity, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div>
                    <div className="font-medium text-white">{entity.name}</div>
                    <div className="text-sm text-gray-400">{entity.type}</div>
                  </div>
                  <div className="bg-purple-900/50 text-purple-300 px-2 py-1 rounded-full text-xs font-medium border border-purple-700/50">
                    {entity.mentions} mentions
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row - Content Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/*
          // Content Metrics
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Eye className="h-5 w-5 text-blue-400" />
              <h3 className="text-lg font-semibold text-white">Content Analysis</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-blue-900/30 rounded-lg border border-blue-700/30">
                <div className="text-2xl font-bold text-blue-400">{websiteData.contentAnalysis.wordCount}</div>
                <div className="text-sm text-gray-300">Words</div>
              </div>
              <div className="text-center p-4 bg-green-900/30 rounded-lg border border-green-700/30">
                <div className="text-2xl font-bold text-green-400">{websiteData.contentAnalysis.readingTime}</div>
                <div className="text-sm text-gray-300">Reading Time</div>
              </div>
              <div className="text-center p-4 bg-purple-900/30 rounded-lg border border-purple-700/30">
                <div className="text-2xl font-bold text-purple-400">{websiteData.contentAnalysis.sentiment}</div>
                <div className="text-sm text-gray-300">Sentiment</div>
              </div>
              <div className="text-center p-4 bg-orange-900/30 rounded-lg border border-orange-700/30">
                <div className="text-2xl font-bold text-orange-400">{websiteData.metrics.readabilityScore}</div>
                <div className="text-sm text-gray-300">Readability</div>
              </div>
            </div>
          </div>
          */}

          {/* Backlinks */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 p-6 hover:shadow-xl transition-all duration-300">
            <div className="flex items-center gap-2 mb-4">
              <Link className="h-5 w-5 text-green-400" />
              <h3 className="text-lg font-semibold text-white">Backlinks</h3>
            </div>
            <div className="space-y-3 max-h-64 overflow-y-auto">
              {websiteData.backlinks.map((backlink, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/50 rounded-lg border border-gray-700">
                  <div>
                    <div className="font-medium text-white">{backlink.domain}</div>
                    <div className="text-sm text-gray-400">{backlink.type}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-green-400">{backlink.authority}</div>
                    <div className="text-xs text-gray-500">Authority</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Topics */}
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-800 p-6">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-indigo-400" />
              <h3 className="text-lg font-semibold text-white">Key Topics</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {websiteData.contentAnalysis.keyTopics.map((topic, index) => (
                <span key={index} className="bg-indigo-900/50 text-indigo-300 px-3 py-2 rounded-full text-sm font-medium border border-indigo-700/50">
                  {topic}
                </span>
              ))}
            </div>
            <div className="mt-6 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
              <div className="text-sm text-gray-400 mb-2">Last Updated</div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="text-sm font-medium text-white">{websiteData.metrics.lastUpdated}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
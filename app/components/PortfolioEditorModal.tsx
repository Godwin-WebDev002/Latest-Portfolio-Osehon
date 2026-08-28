"use client";

import React, { useState } from "react";
import { PortfolioData } from "@/app/data/portfolioData";
import { X, Save, RotateCcw, Edit3 } from "lucide-react";

interface PortfolioEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
  onSave: (newData: PortfolioData) => void;
  onReset: () => void;
}

export const PortfolioEditorModal: React.FC<PortfolioEditorModalProps> = ({
  isOpen,
  onClose,
  data,
  onSave,
  onReset,
}) => {
  const [formData, setFormData] = useState<PortfolioData>(data);
  const [activeTab, setActiveTab] = useState<"person" | "education" | "experience" | "contact">("person");

  if (!isOpen) return null;

  const handlePersonChange = (field: keyof PortfolioData["person"], value: string) => {
    setFormData((prev) => ({
      ...prev,
      person: {
        ...prev.person,
        [field]: value,
      },
    }));
  };

  const handleEducationChange = (index: number, field: string, value: string) => {
    const updated = [...formData.education];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, education: updated }));
  };

  const handleExperienceChange = (index: number, field: string, value: string) => {
    const updated = [...formData.experience];
    updated[index] = { ...updated[index], [field]: value };
    setFormData((prev) => ({ ...prev, experience: updated }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/50 backdrop-blur-xs p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="w-full max-w-lg h-full max-h-[90vh] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-100">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-gray-50">
          <div className="flex items-center space-x-2">
            <Edit3 className="w-5 h-5 text-[#F2561D]" />
            <h3 className="font-bold text-lg text-gray-900 font-heading">
              Customize Portfolio
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-100 bg-white px-6">
          {(["person", "education", "experience", "contact"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`py-3 px-4 text-xs font-bold capitalize transition-colors border-b-2 font-heading ${
                activeTab === tab
                  ? "border-[#F2561D] text-[#F2561D]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4 text-sm">
          {activeTab === "person" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.person.name}
                  onChange={(e) => handlePersonChange("name", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Professional Role
                </label>
                <input
                  type="text"
                  value={formData.person.role}
                  onChange={(e) => handlePersonChange("role", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Portfolio Year
                </label>
                <input
                  type="text"
                  value={formData.person.year}
                  onChange={(e) => handlePersonChange("year", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Bio / Overview
                </label>
                <textarea
                  rows={4}
                  value={formData.person.bio}
                  onChange={(e) => handlePersonChange("bio", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>
            </div>
          )}

          {activeTab === "education" && (
            <div className="space-y-6">
              {formData.education.map((edu, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
                  <h4 className="font-bold text-xs uppercase text-gray-500 font-heading">
                    Education #{idx + 1}
                  </h4>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Years
                    </label>
                    <input
                      type="text"
                      value={edu.period}
                      onChange={(e) => handleEducationChange(idx, "period", e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-200 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      University / Institution
                    </label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(idx, "institution", e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-200 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={2}
                      value={edu.description}
                      onChange={(e) => handleEducationChange(idx, "description", e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-200 rounded-lg bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "experience" && (
            <div className="space-y-6">
              {formData.experience.map((exp, idx) => (
                <div key={idx} className="p-4 bg-gray-50 rounded-xl space-y-3 border border-gray-100">
                  <h4 className="font-bold text-xs uppercase text-gray-500 font-heading">
                    Company #{idx + 1}
                  </h4>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      value={exp.company}
                      onChange={(e) => handleExperienceChange(idx, "company", e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-200 rounded-lg bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(idx, "description", e.target.value)}
                      className="w-full px-3 py-1.5 border border-gray-200 rounded-lg bg-white"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "contact" && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={formData.person.phone}
                  onChange={(e) => handlePersonChange("phone", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  value={formData.person.address}
                  onChange={(e) => handlePersonChange("address", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email / Website
                </label>
                <input
                  type="text"
                  value={formData.person.email}
                  onChange={(e) => handlePersonChange("email", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F2561D]"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100 bg-gray-50">
          <button
            onClick={() => {
              onReset();
              onClose();
            }}
            className="flex items-center space-x-1.5 px-3 py-2 text-xs font-medium text-gray-600 hover:text-red-600 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Reset Default</span>
          </button>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={() => {
                onSave(formData);
                onClose();
              }}
              className="flex items-center space-x-1.5 px-4 py-2 text-xs font-bold text-white bg-[#F2561D] hover:bg-[#D9460F] rounded-lg shadow-md transition-all font-heading"
            >
              <Save className="w-4 h-4" />
              <span>Save Changes</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
